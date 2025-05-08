package hr.unizd.smartstudentcity.service;

import hr.unizd.smartstudentcity.api.WeatherApi;
import hr.unizd.smartstudentcity.exception.GreetingException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalTime;

import static hr.unizd.smartstudentcity.api.OpenAi.callChatGPT;

@Service
public class GreetingService {
    @Value("${chatgpt.api.key}")
    private String openAiApiKey;

    @Cacheable("greeting")
    public String getGreeting() {
        LocalTime currentTime = LocalTime.now();
        LocalTime eightPM = LocalTime.of(20, 0); // 8:00 PM

        String weatherInfo = WeatherApi.getWeatherInfo(currentTime.isAfter(eightPM));

            try {
                String timeOfGreeting = currentTime.isAfter(eightPM) ? "tomorrow" : "today";
                String prompt = "Based on this weather report for " + timeOfGreeting + ": " + weatherInfo + ", give the user in a friendly, fun, and engaging report in croatian. Don't include 'Bok, Pozdrav, Dobar dan...' and similar to beginning and make it maximum two sentences. Be creative!";
                return(callChatGPT(prompt, openAiApiKey));
            } catch (IOException e) {
                throw new GreetingException("There was an error generating the greeting.");
            }
    }
}

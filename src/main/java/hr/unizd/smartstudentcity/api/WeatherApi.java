package hr.unizd.smartstudentcity.api;

import hr.unizd.smartstudentcity.exception.GreetingException;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class WeatherApi {
    public static String getWeatherInfo() {
        return getWeatherInfo(false);
    }

    public static String getWeatherInfo(boolean tomorrow) {
        try {
            URL url = new URL("https://wttr.in/Zadar?format=j1");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");

            BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            StringBuilder responseText = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                responseText.append(line);
            }
            reader.close();

            // Parse JSON
            JSONObject json = new JSONObject(responseText.toString());
            JSONArray weatherArray = json.getJSONArray("weather");
            JSONObject dayData = weatherArray.getJSONObject(tomorrow ? 1 : 0);

            // Get hourly data to calculate average
            JSONArray hourly = dayData.getJSONArray("hourly");
            double tempSum = 0;
            int rain = 0, snow = 0, fog = 0, sun = 0, thunder = 0;

            for (int i = 0; i < hourly.length(); i++) {
                JSONObject hour = hourly.getJSONObject(i);
                tempSum += hour.getDouble("tempC");
                rain += hour.getInt("chanceofrain");
                snow += hour.getInt("chanceofsnow");
                fog += hour.getInt("chanceoffog");
                sun += hour.getInt("chanceofsunshine");
                thunder += hour.getInt("chanceofthunder");
            }

            int count = hourly.length();

            // Return string directly with calculated averages
            return "{" +
                    "averageTemp=" + (tempSum / count) + "°C" +
                    ", chanceOfRain=" + (rain / count) + "%" +
                    ", chanceOfSnow=" + (snow / count) + "%" +
                    ", chanceOfFog=" + (fog / count) + "%" +
                    ", chanceOfSunshine=" + (sun / count) + "%" +
                    ", chanceOfThunder=" + (thunder / count) + "%" +
                    '}';

        } catch (Exception e) {
            throw new GreetingException("Error getting the weather data for greeting.");
        }
    }
}

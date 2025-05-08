package hr.unizd.smartstudentcity.api;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

public class OpenAi {
    public static String callChatGPT(String prompt, String apiKey) throws IOException {
        String endpoint = "https://api.openai.com/v1/chat/completions";

        String jsonInput = """
        {
            "model": "gpt-3.5-turbo",
            "messages": [
                {"role": "user", "content": "%s"}
            ]
        }
        """.formatted(prompt);

        URL url = new URL(endpoint);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();

        conn.setRequestMethod("POST");
        conn.setRequestProperty("Authorization", "Bearer " + apiKey);
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setDoOutput(true);

        try (OutputStream os = conn.getOutputStream()) {
            byte[] input = jsonInput.getBytes("utf-8");
            os.write(input, 0, input.length);
        }

        int responseCode = conn.getResponseCode();
        InputStream is = (responseCode == 200) ? conn.getInputStream() : conn.getErrorStream();

        StringBuilder response = new StringBuilder();
        try (BufferedReader br = new BufferedReader(new InputStreamReader(is))) {
            String line;
            while ((line = br.readLine()) != null) {
                response.append(line.trim());
            }
        }

        String fullResponse = response.toString();

        return getMessageFromJson(fullResponse);
    }

    public static String getMessageFromJson(String json) {
        int contentIndex = json.indexOf("content\": ");

        if (contentIndex != -1) {
            String content = json.substring(contentIndex + 11);
            int endIndex = content.indexOf("\"");
            return content.substring(0, endIndex).replace("\\n", "\n");
        }
        return "No valid response found.";
    }
}

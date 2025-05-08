package hr.unizd.smartstudentcity.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.core.io.ClassPathResource;

@Configuration
public class AppConfig {
    // secret.properties must have: chatgpt.api.key=...
    @Bean
    public static PropertySourcesPlaceholderConfigurer properties() {
        PropertySourcesPlaceholderConfigurer configurer = new PropertySourcesPlaceholderConfigurer();
        configurer.setLocations(
                new ClassPathResource("secret.properties")
        );
        return configurer;
    }
}

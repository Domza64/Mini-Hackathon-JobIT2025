package hr.unizd.smartstudentcity;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@SpringBootApplication
public class SmartStudentCityApplication {

	public static void main(String[] args) {
		SpringApplication.run(SmartStudentCityApplication.class, args);
	}

}

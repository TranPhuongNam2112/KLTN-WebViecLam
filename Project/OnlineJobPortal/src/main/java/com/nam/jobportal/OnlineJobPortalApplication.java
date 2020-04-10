package com.nam.jobportal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class OnlineJobPortalApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineJobPortalApplication.class, args);
	}

}

package com.cognizant.cohort57.pod2.configuration;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	@Bean
    public Docket swaggerConfiguration() {
		//Return a prepared Docket instance
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .paths(PathSelectors.ant("/api/*/*"))
                .apis(RequestHandlerSelectors.basePackage("com.cognizant.cohort57.pod2"))
                .build()
                .apiInfo(apiDetails());
    }

    private ApiInfo apiDetails() {

        return new ApiInfo(
                "PetClinic API",
                "API REST to manage Pets",
                "1.0",
                "Terms of Service",
                new springfox.documentation.service.Contact("Cohort57-pod2", "http://example.com","a@b.com"),
                "API License Version 1.0",
                "http://example.com",
                Collections.emptyList()
        );
    }
}


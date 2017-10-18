package com.thomascookllc.learn001;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
 
@RestController
public class WebRestController {
 
	// https://spring.io/guides/gs/rest-service-cors/
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/api/hi")
	public String hi() {
		return "{ \"name\":\"Jim Jeffries\", \"age\":\"11111111\"}";
	}
}
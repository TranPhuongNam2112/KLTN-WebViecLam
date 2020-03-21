package com.nam.jobportal.models;

import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="job_location")
public class JobLocation {
	
	@Id
	private int id;
	
	@Indexed(unique=true)
	private int job_location_id;
	
	@NotBlank
	private String street_address;
	
	@NotBlank
	private String city_province;
	
	public JobLocation() {
		
	}

	public JobLocation(@NotBlank String street_address, @NotBlank String city_province) {
		super();
		this.street_address = street_address;
		this.city_province = city_province;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getJob_location_id() {
		return job_location_id;
	}

	public void setJob_location_id(int job_location_id) {
		this.job_location_id = job_location_id;
	}

	public String getStreet_address() {
		return street_address;
	}

	public void setStreet_address(String street_address) {
		this.street_address = street_address;
	}

	public String getCity_province() {
		return city_province;
	}

	public void setCity_province(String city_province) {
		this.city_province = city_province;
	}
	
}

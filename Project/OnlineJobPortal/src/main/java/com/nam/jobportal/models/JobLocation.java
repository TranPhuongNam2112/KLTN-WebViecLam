package com.nam.jobportal.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;



@Entity
@Table(name="job_location")
public class JobLocation {

	@Id
	private Long id;

	@OneToOne(mappedBy="joblocation")
	private JobPost jobpost;

	private String street_address;

	private String city_province;

	public JobLocation() {

	}

	public JobLocation(String street_address, String city_province) {
		this.street_address = street_address;
		this.city_province = city_province;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public JobPost getJobpost() {
		return jobpost;
	}

	public void setJobpost(JobPost jobpost) {
		this.jobpost = jobpost;
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

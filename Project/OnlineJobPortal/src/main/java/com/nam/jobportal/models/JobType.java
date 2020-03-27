package com.nam.jobportal.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="job_type")
public class JobType {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String job_type_name;

	public JobType() {
		
	}

	public JobType(String job_type_name) {
		this.job_type_name = job_type_name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getJob_type_name() {
		return job_type_name;
	}

	public void setJob_type_name(String job_type_name) {
		this.job_type_name = job_type_name;
	}

}

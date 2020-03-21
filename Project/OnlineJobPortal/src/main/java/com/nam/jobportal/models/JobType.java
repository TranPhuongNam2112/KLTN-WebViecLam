package com.nam.jobportal.models;

import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="job_type")
public class JobType {
	
	@Id
	private String id;
	
	@Indexed(unique=true)
	private int job_type_id;
	
	@NotBlank
	private String job_type_name;

	public JobType() {
		
	}

	public JobType(@NotBlank String job_type_name) {
		this.job_type_name = job_type_name;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getJob_type_id() {
		return job_type_id;
	}

	public void setJob_type_id(int job_type_id) {
		this.job_type_id = job_type_id;
	}

	public String getJob_type_name() {
		return job_type_name;
	}

	public void setJob_type_name(String job_type_name) {
		this.job_type_name = job_type_name;
	}
	
}

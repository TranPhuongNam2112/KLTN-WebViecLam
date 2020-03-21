package com.nam.jobportal.models;

import java.util.Date;

import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="job_post")
public class JobPost {
	
	@Id
	private String id;
	
	@Indexed(unique=true)
	private int post_id;
	
	@NotBlank
	private int posted_by;
	
	@NotBlank
	private int job_type_id;
	
	@NotBlank
	private String industry;
	
	private Date created_date;
	
	@NotBlank
	private String job_description;
	
	@NotBlank
	private int job_location_id;
	
	@NotBlank
	private Date expired_date;
	
	@NotBlank
	private int salary;

	public JobPost() {
		
	}

	public JobPost(@NotBlank int posted_by, @NotBlank int job_type_id, @NotBlank String industry, Date created_date,
			@NotBlank String job_description, @NotBlank int job_location_id, @NotBlank Date expired_date,
			@NotBlank int salary) {
		super();
		this.posted_by = posted_by;
		this.job_type_id = job_type_id;
		this.industry = industry;
		this.created_date = created_date;
		this.job_description = job_description;
		this.job_location_id = job_location_id;
		this.expired_date = expired_date;
		this.salary = salary;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getPost_id() {
		return post_id;
	}

	public void setPost_id(int post_id) {
		this.post_id = post_id;
	}

	public int getPosted_by() {
		return posted_by;
	}

	public void setPosted_by(int posted_by) {
		this.posted_by = posted_by;
	}

	public int getJob_type_id() {
		return job_type_id;
	}

	public void setJob_type_id(int job_type_id) {
		this.job_type_id = job_type_id;
	}

	public String getIndustry() {
		return industry;
	}

	public void setIndustry(String industry) {
		this.industry = industry;
	}

	public Date getCreated_date() {
		return created_date;
	}

	public void setCreated_date(Date created_date) {
		this.created_date = created_date;
	}

	public String getJob_description() {
		return job_description;
	}

	public void setJob_description(String job_description) {
		this.job_description = job_description;
	}

	public int getJob_location_id() {
		return job_location_id;
	}

	public void setJob_location_id(int job_location_id) {
		this.job_location_id = job_location_id;
	}

	public Date getExpired_date() {
		return expired_date;
	}

	public void setExpired_date(Date expired_date) {
		this.expired_date = expired_date;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}
	
	
}

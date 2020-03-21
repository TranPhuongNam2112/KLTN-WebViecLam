package com.nam.jobportal.models;

import java.util.Date;

public class Experience {

	public String company_name;
	
	public String job_title;
	
	public Date start_date;
	
	public Date end_date;
	
	public Experience() {
		
	}

	public Experience(String company_name, String job_title, Date start_date, Date end_date) {
		super();
		this.company_name = company_name;
		this.job_title = job_title;
		this.start_date = start_date;
		this.end_date = end_date;
	}

	public String getCompany_name() {
		return company_name;
	}

	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}

	public String getJob_title() {
		return job_title;
	}

	public void setJob_title(String job_title) {
		this.job_title = job_title;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}
	
	
}

package com.nam.jobportal.models;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="saved_candidate")
public class SavedCandidate {

	@Id
	private String id;
	
	private int candidate_id;
	
	private int employer_account_id;
	
	private Date saved_date;
	
	public SavedCandidate() {
		
	}

	public SavedCandidate(int candidate_id, int employer_account_id, Date saved_date) {
		super();
		this.candidate_id = candidate_id;
		this.employer_account_id = employer_account_id;
		this.saved_date = saved_date;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getCandidate_id() {
		return candidate_id;
	}

	public void setCandidate_id(int candidate_id) {
		this.candidate_id = candidate_id;
	}

	public int getEmployer_account_id() {
		return employer_account_id;
	}

	public void setEmployer_account_id(int employer_account_id) {
		this.employer_account_id = employer_account_id;
	}

	public Date getSaved_date() {
		return saved_date;
	}

	public void setSaved_date(Date saved_date) {
		this.saved_date = saved_date;
	}
	
	
}

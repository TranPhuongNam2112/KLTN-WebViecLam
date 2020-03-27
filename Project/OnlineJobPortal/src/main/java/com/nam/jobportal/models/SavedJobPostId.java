package com.nam.jobportal.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class SavedJobPostId implements Serializable{
	
	@Column(name="candidate_id")
	private Long candidateId;
	
	@Column(name="job_post_id")
	private Long jobpostId;
	
}

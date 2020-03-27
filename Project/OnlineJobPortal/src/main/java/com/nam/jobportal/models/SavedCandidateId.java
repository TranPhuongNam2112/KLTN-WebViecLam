package com.nam.jobportal.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class SavedCandidateId implements Serializable {
	
	@Column(name="candidate_id")
	private Long candidateId;
	
	@Column(name="employer_id")
	private Long employerId;
}

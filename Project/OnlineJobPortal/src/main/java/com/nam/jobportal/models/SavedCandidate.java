package com.nam.jobportal.models;

import java.util.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;


@Entity
@Table(name="saved_candidate")
public class SavedCandidate {
	
	@EmbeddedId
	private SavedCandidateId savedCandidateId;

	@ManyToOne
	@MapsId("candidateId")
	private Candidate candidate;

	@ManyToOne
	@MapsId("employerId")
	private Employer employer;

	@Column
	private Date saved_date;

	public SavedCandidate() {

	}

	public SavedCandidate(Employer employer, Candidate candidate) {
		this.employer = employer;
		this.candidate = candidate;
	}

	public Employer getEmployer() {
		return employer;
	}

	public void setEmployer(Employer employer) {
		this.employer = employer;
	}

	public Candidate getCandidate() {
		return candidate;
	}

	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}

	public Date getSaved_date() {
		return saved_date;
	}

	public void setSaved_date(Date saved_date) {
		this.saved_date = saved_date;
	}

	@Override
	public int hashCode() {
		return Objects.hash(employer.getId(), candidate.getId(), saved_date);
	}
}

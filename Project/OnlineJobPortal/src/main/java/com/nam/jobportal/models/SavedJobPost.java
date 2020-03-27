package com.nam.jobportal.models;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;


@Entity
@Table(name="saved_job_post")
public class SavedJobPost implements Serializable {

	@EmbeddedId
	private SavedJobPostId savedJobPostId;

	@ManyToOne
	@MapsId("candidateId")
	private Candidate candidate;

	@ManyToOne
	@MapsId("jobpostId")
	private JobPost jobpost;
	
	@Column
	private Date saveddate;


	public SavedJobPost() {
		
	}

	
	public SavedJobPost(Candidate candidate, JobPost jobpost) {
		this.candidate = candidate;
		this.jobpost = jobpost;
	}
	
	@Override
    public int hashCode() {
        return Objects.hash(candidate.getId(), jobpost.getId(), saveddate);
    }


	public Candidate getCandidate() {
		return candidate;
	}


	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}


	public JobPost getJobpost() {
		return jobpost;
	}


	public void setJobpost(JobPost jobpost) {
		this.jobpost = jobpost;
	}


	public Date getSaveddate() {
		return saveddate;
	}


	public void setSaveddate(Date saveddate) {
		this.saveddate = saveddate;
	}
	
}

package com.nam.jobportal.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "education")
public class Education {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String university_college;

	private String major;

	private Date start_date;

	private Date completion_date;

	private int gpa;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "candidate_id", nullable = false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	private Candidate candidate;

	public Education() {

	}

	public Education(String university_college, String major, Date start_date, Date completion_date, int gpa) {
		super();
		this.university_college = university_college;
		this.major = major;
		this.start_date = start_date;
		this.completion_date = completion_date;
		this.gpa = gpa;
	}

	public String getUniversity_college() {
		return university_college;
	}

	public void setUniversity_college(String university_college) {
		this.university_college = university_college;
	}

	public String getMajor() {
		return major;
	}

	public void setMajor(String major) {
		this.major = major;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getCompletion_date() {
		return completion_date;
	}

	public void setCompletion_date(Date completion_date) {
		this.completion_date = completion_date;
	}

	public int getGpa() {
		return gpa;
	}

	public void setGpa(int gpa) {
		this.gpa = gpa;
	}

	public Candidate getCandidate() {
		return candidate;
	}

	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}
}

package com.nam.jobportal.models;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="candidate")
public class Candidate {

	@Id
	private String id;
	
	@Indexed(unique=true)
	private int candidateid;
	
	private String homeaddress;
	
	private String gender;
	
	private Date DoB;
	
	private Binary CV;
	
	private Set<Experience> experiences = new HashSet<>();
	
	private Set<Education> educations = new HashSet<>();
	
	private int accountid;

	public Candidate() {

	}

	public Candidate(String homeaddress, String gender, Date doB, Binary cV, Set<Experience> experiences,
			Set<Education> educations, int accountid) {
		super();
		this.homeaddress = homeaddress;
		this.gender = gender;
		DoB = doB;
		CV = cV;
		this.experiences = experiences;
		this.educations = educations;
		this.accountid = accountid;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getCandidateid() {
		return candidateid;
	}

	public void setCandidateid(int candidateid) {
		this.candidateid = candidateid;
	}

	public String getHomeaddress() {
		return homeaddress;
	}

	public void setHomeaddress(String homeaddress) {
		this.homeaddress = homeaddress;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getDoB() {
		return DoB;
	}

	public void setDoB(Date doB) {
		DoB = doB;
	}

	public Binary getCV() {
		return CV;
	}

	public void setCV(Binary cV) {
		CV = cV;
	}

	public Set<Experience> getExperiences() {
		return experiences;
	}

	public void setExperiences(Set<Experience> experiences) {
		this.experiences = experiences;
	}

	public Set<Education> getEducations() {
		return educations;
	}

	public void setEducations(Set<Education> educations) {
		this.educations = educations;
	}

	public int getAccountid() {
		return accountid;
	}

	public void setAccountid(int accountid) {
		this.accountid = accountid;
	}
	

}

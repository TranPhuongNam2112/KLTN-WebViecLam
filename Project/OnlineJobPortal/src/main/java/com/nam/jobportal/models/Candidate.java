package com.nam.jobportal.models;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;


@Entity
@Table(	name = "candidate", 
uniqueConstraints = { 
		@UniqueConstraint(columnNames = "phone_number") 
})
public class Candidate {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String phone_number;

	private String homeaddress;

	private String gender;

	private Date DoB;

	private String CV;

	private String image;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "account_id", referencedColumnName = "id")
	private UserAccount userAccount;

	@OneToMany(mappedBy = "candidate", cascade = CascadeType.ALL)
	private Set<SavedJobPost> savedJobPosts = new HashSet<>();
	
	@OneToMany(mappedBy = "candidate", cascade = CascadeType.ALL)
	private Set<SavedCandidate> savedCandidates = new HashSet<>();

	public Candidate(String phone_number, String homeaddress, String gender, Date doB, String cV, String image, SavedJobPost... savedJobPosts) {
		this.phone_number = phone_number;
		this.homeaddress = homeaddress;
		this.gender = gender;
		this.DoB = doB;
		this.CV = cV;
		this.image = image;
		for(SavedJobPost savedJobPost : savedJobPosts) savedJobPost.setCandidate(this);;
        this.savedJobPosts = Stream.of(savedJobPosts).collect(Collectors.toSet());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
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

	public String getCV() {
		return CV;
	}

	public void setCV(String cV) {
		CV = cV;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public UserAccount getUserAccount() {
		return userAccount;
	}

	public void setUserAccount(UserAccount userAccount) {
		this.userAccount = userAccount;
	}



}

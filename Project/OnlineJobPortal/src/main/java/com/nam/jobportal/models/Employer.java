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

@Entity
@Table(name = "employer")
public class Employer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String companyname;
	
	private String description;
	
	private Date establishmentdate;
	
	private String websiteurl;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    private UserAccount userAccount;
	
	@OneToMany(mappedBy = "employer", cascade = CascadeType.ALL)
	private Set<SavedCandidate> savedCandidates = new HashSet<>();

	public Employer() {
		
	}

	public Employer(String companyname, String description, Date establishmentdate, String websiteurl, SavedCandidate...savedCandidates ) {
		super();
		this.companyname = companyname;
		this.description = description;
		this.establishmentdate = establishmentdate;
		this.websiteurl = websiteurl;
		for(SavedCandidate savedCandidate : savedCandidates) savedCandidate.setEmployer(this);
        this.savedCandidates = Stream.of(savedCandidates).collect(Collectors.toSet());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCompanyname() {
		return companyname;
	}

	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getEstablishmentdate() {
		return establishmentdate;
	}

	public void setEstablishmentdate(Date establishmentdate) {
		this.establishmentdate = establishmentdate;
	}

	public String getWebsiteurl() {
		return websiteurl;
	}

	public void setWebsiteurl(String websiteurl) {
		this.websiteurl = websiteurl;
	}

	public UserAccount getUserAccount() {
		return userAccount;
	}

	public void setUserAccount(UserAccount userAccount) {
		this.userAccount = userAccount;
	}
}

package com.nam.jobportal.models;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="employer")
public class Employer {
	
	@Id
	private String id;
	
	@Indexed(unique=true)
	private String companyname;
	
	private String description;
	
	private Date establishmentdate;
	
	private String websiteurl;
	
	private Set<Binary> companyimage = new HashSet<>();
	
	private int accountid;

	public Employer() {
		
	}

	public Employer(String companyname, String description, Date establishmentdate, String websiteurl,
			Set<Binary> companyimage) {
		super();
		this.companyname = companyname;
		this.description = description;
		this.establishmentdate = establishmentdate;
		this.websiteurl = websiteurl;
		this.companyimage = companyimage;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
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

	public Set<Binary> getCompanyimage() {
		return companyimage;
	}

	public void setCompanyimage(Set<Binary> companyimage) {
		this.companyimage = companyimage;
	}

	public int getAccountid() {
		return accountid;
	}

	public void setAccountid(int accountid) {
		this.accountid = accountid;
	}

}

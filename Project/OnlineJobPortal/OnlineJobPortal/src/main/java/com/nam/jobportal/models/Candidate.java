package com.nam.jobportal.models;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="candidate")
public class Candidate {

	@Id
	private String id;
	
	@Field(name="candidate_id")
	@Indexed(unique=true)
	private int candidateid;
	
	@Field(name="home_address")
	private String homeaddress;
	
	@Field(name="gender")
	private String gender;
	
	@Field(name="DoB")
	private Date DoB;
	
	@Field(name="CV")
	private Binary CV;
	
	@Field(name="experience")
	private Set<Experience> experiences = new HashSet<>();
	
	@Field(name="education")
	private Set<Education> educations = new HashSet<>();
	
	@Field(name="account_id")
	private int accountid;
	

}

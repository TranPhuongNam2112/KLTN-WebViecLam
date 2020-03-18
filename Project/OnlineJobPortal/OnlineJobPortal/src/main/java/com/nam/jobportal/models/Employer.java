package com.nam.jobportal.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="employer")
public class Employer {
	
	@Id
	private String id;
	
	@Indexed(unique=true)
	@Field(name="company_name")
	private String companyname;
	
	@Field(name="profile_description")
	private String description;
	
	
	

}

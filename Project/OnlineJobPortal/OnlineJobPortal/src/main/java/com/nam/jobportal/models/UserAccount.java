package com.nam.jobportal.models;

import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="user_account")
public class UserAccount {

	@Id
	@Field(name="user_account_id")
	private Long id;
	
	@Field(name="first_name")
	@NotBlank
	@Size(max=20)
	private String firstname;
	
	@Field(name="last_name")
	@NotBlank
	@Size(max=30)
	private String lastname;
	
	@Field(name="contact_number")
	@NotBlank
	private String contactnumber;
	
	@Email
	@Field(name="email")
	@NotBlank
	private String email;
	
	@Field(name="password")
	@NotBlank
	private String password;
	
	@Field(name="role_id")
	@DBRef
	private int role_id;
	
	@Field(name="registration_date")
	private Date registrationdate;
	
	@Field(name="is_active")
	private Boolean isactive;
	
	@Field(name="image")
	private Binary image;
	
	@Field(name="enabled")
	private Boolean enabled;

	public UserAccount() {
	}

	public UserAccount(Long id, String firstname, String lastname, String contactnumber, @Email String email,
			String password, int role_id, Date registrationdate, Boolean isactive, Binary image, Boolean enabled) {
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.contactnumber = contactnumber;
		this.email = email;
		this.password = password;
		this.role_id = role_id;
		this.registrationdate = registrationdate;
		this.isactive = isactive;
		this.image = image;
		this.enabled = enabled;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getContactnumber() {
		return contactnumber;
	}

	public void setContactnumber(String contactnumber) {
		this.contactnumber = contactnumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getRole_id() {
		return role_id;
	}

	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}

	public Date getRegistrationdate() {
		return registrationdate;
	}

	public void setRegistrationdate(Date registrationdate) {
		this.registrationdate = registrationdate;
	}

	public Boolean getIsactive() {
		return isactive;
	}

	public void setIsactive(Boolean isactive) {
		this.isactive = isactive;
	}

	public Binary getImage() {
		return image;
	}

	public void setImage(Binary image) {
		this.image = image;
	}

	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}
}

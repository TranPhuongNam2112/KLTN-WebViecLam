package com.nam.jobportal.models;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.nam.jobportal.annotations.ValidPassword;


@Document(collection="user_account")
public class UserAccount {

	@Transient
	public static final String SEQUENCE_NAME = "useraccount_sequence";

	@Id
	private String id;

	@Indexed(unique=true)
	private int useraccount_id;

	@NotBlank
	@Size(max=20)
	private String firstname;

	@NotBlank
	@Size(max=30)
	private String lastname;

	private String contactnumber;
	

	@Email
	@NotBlank
	@Indexed(unique=true)
	private String email;

	@NotBlank
	@ValidPassword
	private String password;

	@DBRef
	private Set<Role> roles = new HashSet<>();
	
	private Date registrationdate;

	private boolean isactive;

	private Binary image;

	private boolean enabled;

	public UserAccount() {

	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getUseraccount_id() {
		return useraccount_id;
	}

	public void setUseraccount_id(int useraccount_id) {
		this.useraccount_id = useraccount_id;
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

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public Date getRegistrationdate() {
		return registrationdate;
	}

	public void setRegistrationdate(Date registrationdate) {
		this.registrationdate = registrationdate;
	}

	public boolean isIsactive() {
		return isactive;
	}

	public void setIsactive(boolean isactive) {
		this.isactive = isactive;
	}

	public Binary getImage() {
		return image;
	}

	public void setImage(Binary image) {
		this.image = image;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	
	
}
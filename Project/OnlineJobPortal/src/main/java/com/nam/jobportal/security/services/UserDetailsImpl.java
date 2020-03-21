package com.nam.jobportal.security.services;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.bson.types.Binary;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nam.jobportal.models.UserAccount;

public class UserDetailsImpl implements UserDetails {
	private static final long serialVersionUID = 1L;

	private String id;

	
	private String firstname;

	private String lastname;

	private String contactnumber;
	

	private String email;
	
	private Binary image;
	
	
	@JsonIgnore
	private String password;

	private Collection<? extends GrantedAuthority> authorities;

	public UserDetailsImpl(String id, String firstname, String lastname, String contactnumber, String email, String password,
			Binary image,
			Collection<? extends GrantedAuthority> authorities) {
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.contactnumber = contactnumber;
		this.email = email;
		this.password = password;
		this.image = image;
		this.authorities = authorities;
	}

	public static UserDetailsImpl build(UserAccount useraccount) {
		List<GrantedAuthority> authorities = useraccount.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName().name()))
				.collect(Collectors.toList());

		return new UserDetailsImpl(
				useraccount.getId(), 
				useraccount.getFirstname(), 
				useraccount.getLastname(),
				useraccount.getContactnumber(),
				useraccount.getEmail(),
				useraccount.getPassword(), 
				useraccount.getImage(), 
				authorities);
		
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public String getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	@Override
	public String getPassword() {
		return password;
	}
	

	public String getFirstname() {
		return firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public String getContactnumber() {
		return contactnumber;
	}


	public Binary getImage() {
		return image;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		UserDetailsImpl user = (UserDetailsImpl) o;
		return Objects.equals(id, user.id);
	}

	@Override
	public String getUsername() {
		return email;
	}


}

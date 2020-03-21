package com.nam.jobportal.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.transaction.annotation.Transactional;

import com.nam.jobportal.models.UserAccount;
import com.nam.jobportal.repository.UserAccountRepository;

public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	UserAccountRepository userAccountRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
	    UserAccount user = userAccountRepository.findByEmail(email);

	    if (user == null) {
	        throw new UsernameNotFoundException("User is not found or does not exist!");
	    }

	    return UserDetailsImpl.build(user);
	}

}
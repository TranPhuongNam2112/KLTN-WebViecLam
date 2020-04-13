package com.nam.jobportal.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.nam.jobportal.exceptions.ResourceNotFoundException;
import com.nam.jobportal.models.UserAccount;

import com.nam.jobportal.repository.UserAccountRepository;

@Service
public class UserAccountService {
	@Autowired
	UserAccountRepository userAccountRepository;

	public UserAccount getAccountById(Long id) throws ResourceNotFoundException {
		Optional<UserAccount> userAccount = userAccountRepository.findById(id);

		if (userAccount.isPresent()) {
			return userAccount.get();
		} else {
			throw new ResourceNotFoundException("User account", "id", id);
		}
	}

}

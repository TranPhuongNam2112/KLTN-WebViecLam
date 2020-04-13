package com.nam.jobportal.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.nam.jobportal.repository.EmployerRepository;
import com.nam.jobportal.exceptions.ResourceNotFoundException;
import com.nam.jobportal.models.Employer;

@Service
public class EmployerService {
	@Autowired
	EmployerRepository employerRepository;


	public Employer getEmployerById(Long id) throws ResourceNotFoundException {
		Optional<Employer> employer = employerRepository.findById(id);

		if (employer.isPresent()) {
			return employer.get();
		} else {
			throw new ResourceNotFoundException("Employer", "id", id);
		}
	}
	
	
	
}

package com.nam.jobportal.controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nam.jobportal.models.Candidate;
import com.nam.jobportal.repository.CandidateRepository;
import com.nam.jobportal.repository.EmployerRepository;
import com.nam.jobportal.services.CandidateService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/admin/")
public class AdminDashboardController {
	@Autowired
	CandidateService candidateService;

	@GetMapping("/candidates")
	public ResponseEntity<List<Candidate>> getAllCandidates(
			@RequestParam(defaultValue = "0") Integer pageNo, 
			@RequestParam(defaultValue = "10") Integer pageSize,
			@RequestParam(defaultValue = "id") String sortBy) 
	{
		List<Candidate> list = candidateService.getAllCandidate(pageNo, pageSize, sortBy);

		return new ResponseEntity<List<Candidate>>(list, new HttpHeaders(), HttpStatus.OK); 
	}

	@GetMapping("/candidates")
	public ResponseEntity<List<Candidate>> getCandidatesByGender(
			@RequestParam(required = false) String gender,
			@RequestParam(defaultValue = "0") Integer pageNo, 
			@RequestParam(defaultValue = "10") Integer pageSize,
			@RequestParam(defaultValue = "id") String sortBy) 
	{
		List<Candidate> list = candidateService.getCandidateByGender(gender, pageNo, pageSize, sortBy);

		return new ResponseEntity<List<Candidate>>(list, new HttpHeaders(), HttpStatus.OK); 
	}
	
	@GetMapping("/candidates")
	public ResponseEntity<List<Candidate>> getCandidatesByDoBBetween(
			@RequestParam(required = false) Date startDate,
			@RequestParam(required = false) Date endDate,
			@RequestParam(defaultValue = "0") Integer pageNo, 
			@RequestParam(defaultValue = "10") Integer pageSize,
			@RequestParam(defaultValue = "id") String sortBy) 
	{
		List<Candidate> list = candidateService.getCandidateByDateBetween(startDate, endDate, pageNo, pageSize, sortBy);

		return new ResponseEntity<List<Candidate>>(list, new HttpHeaders(), HttpStatus.OK); 
	}
	
	@GetMapping("/candidates")
	public ResponseEntity<List<Candidate>> getCandidateByPhoneNumber(
			@RequestParam(required = false) String phonenumber,
			@RequestParam(required = false) Date endDate,
			@RequestParam(defaultValue = "0") Integer pageNo, 
			@RequestParam(defaultValue = "10") Integer pageSize,
			@RequestParam(defaultValue = "id") String sortBy) 
	{
		List<Candidate> list = candidateService.getCandidateByPhoneNumber(phonenumber, pageNo, pageSize, sortBy);

		return new ResponseEntity<List<Candidate>>(list, new HttpHeaders(), HttpStatus.OK); 
	}
	
	
}

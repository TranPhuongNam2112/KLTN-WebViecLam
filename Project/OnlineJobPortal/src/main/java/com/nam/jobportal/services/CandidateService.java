package com.nam.jobportal.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.nam.jobportal.models.Candidate;
import com.nam.jobportal.repository.CandidateRepository;

@Service
public class CandidateService {
	@Autowired
	CandidateRepository candidateRepository;

	public List<Candidate> getAllCandidate(Integer pageNo, Integer pageSize, String sortBy)
	{
		Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));

		Page<Candidate> pagedResult = candidateRepository.findAll(paging);

		if(pagedResult.hasContent()) {
			return pagedResult.getContent();
		} else {
			return new ArrayList<Candidate>();
		}
	}
	public List<Candidate> getCandidateByGender(String gender,Integer pageNo, Integer pageSize, String sortBy)
	{
		Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));

		Page<Candidate> pagedResult = candidateRepository.findCandidateByGender(gender, paging);

		if(pagedResult.hasContent()) {
			return pagedResult.getContent();
		} else {
			return new ArrayList<Candidate>();
		}
	}
	
	public List<Candidate> getCandidateByEmail(String email, Integer pageNo, Integer pageSize, String sortBy) 
	{
		Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));

		Slice<Candidate> pagedResult = candidateRepository.findByEmail(email, paging);

		if(pagedResult.hasContent()) {
			return pagedResult.getContent();
		} else {
			return new ArrayList<Candidate>();
		}
	}
	

	public List<Candidate> getCandidateByPhoneNumber(String phone_number, Integer pageNo, Integer pageSize, String sortBy) 
	{
		Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));

		Slice<Candidate> pagedResult = candidateRepository.findByPhoneNumber(phone_number, paging);

		if(pagedResult.hasContent()) {
			return pagedResult.getContent();
		} else {
			return new ArrayList<Candidate>();
		}
	}
	
	public List<Candidate> getCandidateByDateBetween(Date startDate, Date endDate, Integer pageNo, Integer pageSize, String sortBy) 
	{
		Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));

		Slice<Candidate> pagedResult = candidateRepository.findAllByDoBBetween(startDate, endDate, paging);

		if(pagedResult.hasContent()) {
			return pagedResult.getContent();
		} else {
			return new ArrayList<Candidate>();
		}
	}
	
}

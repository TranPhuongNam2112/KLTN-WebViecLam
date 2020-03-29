package com.nam.jobportal.controllers;

import javax.persistence.criteria.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;

import com.fasterxml.jackson.databind.util.ArrayBuilders.BooleanBuilder;
import com.nam.jobportal.models.Candidate;
import com.nam.jobportal.repository.CandidateRepository;

public class CandidateDashboardController {
	@Autowired
	CandidateRepository candidateRepository;
	
	@GetMapping(value = "/addresses", produces = MediaType.APPLICATION_JSON_VALUE)
	public Iterable<Candidate> queryOverCandidate(
	  @QuerydslPredicate(root = Candidate.class) Predicate predicate) {
	    BooleanBuilder builder = new BooleanBuilder();
	    return candidateRepository.findAll(builder.and(predicate));
	}
}

package com.nam.jobportal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nam.jobportal.models.Candidate;

public interface CandidateRepository extends MongoRepository<Candidate, String> {
	

}

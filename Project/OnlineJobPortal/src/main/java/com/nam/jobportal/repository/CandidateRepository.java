package com.nam.jobportal.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.nam.jobportal.models.Candidate;

public interface CandidateRepository extends JpaRepository<Candidate, Long> {
	

}

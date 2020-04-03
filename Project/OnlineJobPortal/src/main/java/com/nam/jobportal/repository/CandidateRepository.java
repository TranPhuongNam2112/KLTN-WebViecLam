package com.nam.jobportal.repository;

import java.util.Date;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nam.jobportal.models.Candidate;

public interface CandidateRepository extends JpaRepository<Candidate, Long> {

	Page<Candidate> findByGenderNamed(@Param("gender") String gender, Pageable paging);
	
	@Query("SELECT c FROM Candidate c JOIN c.account_id a WHERE " +
            "LOWER(a.email) LIKE LOWER(CONCAT('%',:email, '%'))")
    Slice<Candidate> findByEmail(@Param("email") String email, Pageable pageable);
	
	@Query("SELECT c FROM Candidate c WHERE " +
            "LOWER(c.phone_number) LIKE LOWER(CONCAT('%',:phone_number, '%'))")
	Slice<Candidate> findByPhoneNumber(@Param("phone_number") String phone_number, Pageable pageable);
	
	@Query("SELECT COUNT(c) FROM Candidate c")
    Long numberofCandidates();
	
	Slice<Candidate> findAllByDoBBetween(Date startDate,
		      Date endDate, Pageable pageable);
	
	
}

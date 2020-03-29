package com.nam.jobportal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nam.jobportal.models.JobPost;
import com.nam.jobportal.models.SavedJobPost;

public interface SavedJobPostRepository extends JpaRepository<SavedJobPost, Long>{
	
	@Query(value = "Select j from JobPost j Join j.savedjobpost s Where s.candidate= :id")
	List<JobPost> findByCandidateId(@Param("id") Long id);
}

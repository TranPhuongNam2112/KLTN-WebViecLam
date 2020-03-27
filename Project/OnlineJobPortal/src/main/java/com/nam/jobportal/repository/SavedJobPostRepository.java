package com.nam.jobportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nam.jobportal.models.SavedJobPost;

public interface SavedJobPostRepository extends JpaRepository<SavedJobPost, String>{
	
	SavedJobPost findBy

}

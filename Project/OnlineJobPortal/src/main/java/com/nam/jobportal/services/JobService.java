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
import com.nam.jobportal.exceptions.ResourceNotFoundException;
import com.nam.jobportal.models.JobPost;
import com.nam.jobportal.repository.JobPostRepository;


@Service
public class JobService {
	@Autowired
	JobPostRepository jobPostRepository;
	     

	public JobPost getJobPostById(Long id) throws ResourceNotFoundException {
		Optional<JobPost> jobpost = jobPostRepository.findById(id);

		if (jobpost.isPresent()) {
			return jobpost.get();
		} else {
			throw new ResourceNotFoundException("Job Post", "id", id);
		}
	}

	 public void deleteJobPostById(Long id) throws ResourceNotFoundException 
	    {
	        Optional<JobPost> jobpost = jobPostRepository.findById(id);
	         
	        if(jobpost.isPresent()) 
	        {
	        	jobPostRepository.deleteById(id);
	        } else {
	            throw new ResourceNotFoundException("Job Post", "id", id);
	        }
	    } 
}

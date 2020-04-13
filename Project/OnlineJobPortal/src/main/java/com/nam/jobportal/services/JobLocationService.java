package com.nam.jobportal.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nam.jobportal.exceptions.ResourceNotFoundException;
import com.nam.jobportal.models.JobLocation;
import com.nam.jobportal.models.JobPost;
import com.nam.jobportal.repository.JobLocationRepository;

@Service
public class JobLocationService {
	@Autowired
	JobLocationRepository jobLocationResponsity;
	public JobLocation getJobLocationById(Long id) throws ResourceNotFoundException {
		Optional<JobLocation> jobLocation = jobLocationResponsity.findById(id);

		if (jobLocation.isPresent()) {
			return jobLocation.get();
		} else {
			throw new ResourceNotFoundException("Job Location", "id", id);
		}
	}
}

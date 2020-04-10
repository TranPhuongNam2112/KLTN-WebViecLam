package com.nam.jobportal.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nam.jobportal.models.JobLocation;
import com.nam.jobportal.repository.JobLocationResponsity;

@Service
public class JobLocationService {
	@Autowired
	JobLocationResponsity jobLocationResponsity;
	  public List<JobLocation> getAllLocations()
	    {
	        List<JobLocation> jobLocationList = jobLocationResponsity.findAll();
	         
	        if(jobLocationList.size() > 0) {
	            return jobLocationList;
	        } else {
	            return new ArrayList<JobLocation>();
	        }
	    }
}

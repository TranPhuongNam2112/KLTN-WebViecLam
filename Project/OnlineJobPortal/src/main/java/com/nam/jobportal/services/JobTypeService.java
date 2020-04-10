package com.nam.jobportal.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nam.jobportal.exceptions.ResourceNotFoundException;
import com.nam.jobportal.models.JobType;
import com.nam.jobportal.repository.JobTypeRepository;

@Service
public class JobTypeService {
	@Autowired
	JobTypeRepository jobTypeRepository;
	  public List<JobType> getAllJobTypes()
	    {
	        List<JobType> jobTypeList = jobTypeRepository.findAll();
	         
	        if(jobTypeList.size() > 0) {
	            return jobTypeList;
	        } else {
	            return new ArrayList<JobType>();
	        }
	    }
	  public void deleteJobTypeById(Long id) throws ResourceNotFoundException 
	    {
	        Optional<JobType> jobtype = jobTypeRepository.findById(id);
	         
	        if(jobtype.isPresent()) 
	        {
	        	jobTypeRepository.deleteById(id);
	        } else {
	            throw new ResourceNotFoundException("Job Type", "id", id);
	        }
	    } 
	  public JobType updateJobType(JobType entity)
	    {
	      	        
	        Optional < JobType > jobType = this.jobTypeRepository.findById(entity.getId());

	        if (jobType.isPresent()) {
	        	JobType jobTypeUpdate = jobType.get();
	        	jobTypeUpdate.setJob_type_name(entity.getJob_type_name());
	           
	        	jobTypeRepository.save(jobTypeUpdate);
	            return jobTypeUpdate;
	        } else {
	            throw new ResourceNotFoundException("Jobtype not found with ","id", entity.getId());
	        }
	    } 
	  public JobType createJobType(JobType jobType) {
	        return jobTypeRepository.save(jobType);
	    }
}

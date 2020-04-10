package com.nam.jobportal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nam.jobportal.models.JobPost;


public interface JobPostRepository extends JpaRepository<JobPost, Long>  {

	@Query("SELECT jp from JobPost jp INNER JOIN jp.jobtype jt WHERE jt.job_type_name=?1")
	List<JobPost> findJobPostsByJobType(String job_type_name);
	
    List<JobPost> findAllBySalaryBetween(Long minSalary, Long maxSalary);

	List<JobPost> findJobPostByIndustry(String industry);
	
}

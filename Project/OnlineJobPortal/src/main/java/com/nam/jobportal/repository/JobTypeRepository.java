package com.nam.jobportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nam.jobportal.models.JobType;



public interface JobTypeRepository extends JpaRepository<JobType,Long> {

}

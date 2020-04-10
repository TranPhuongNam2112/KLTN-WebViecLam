package com.nam.jobportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nam.jobportal.models.JobLocation;

public interface JobLocationResponsity extends JpaRepository<JobLocation,Long> {

}

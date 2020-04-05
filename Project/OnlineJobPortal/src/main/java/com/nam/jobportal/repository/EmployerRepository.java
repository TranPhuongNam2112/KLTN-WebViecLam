package com.nam.jobportal.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nam.jobportal.models.Candidate;
import com.nam.jobportal.models.Employer;

public interface EmployerRepository extends JpaRepository<Employer, Long>{
}

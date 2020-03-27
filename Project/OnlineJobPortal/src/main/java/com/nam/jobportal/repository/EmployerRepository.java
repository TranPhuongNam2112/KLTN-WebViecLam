package com.nam.jobportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nam.jobportal.models.Employer;

public interface EmployerRepository extends JpaRepository<Employer, Long>{

}

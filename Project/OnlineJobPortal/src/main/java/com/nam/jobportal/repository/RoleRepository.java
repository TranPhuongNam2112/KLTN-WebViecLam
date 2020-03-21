package com.nam.jobportal.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nam.jobportal.models.Role;

public interface RoleRepository extends MongoRepository<Role, String>{
	  Optional<Role> findByname(String role_name);
	  Optional<Role> findByroleid(String role_id);
}

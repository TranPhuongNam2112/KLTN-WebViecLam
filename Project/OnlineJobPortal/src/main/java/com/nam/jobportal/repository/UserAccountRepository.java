package com.nam.jobportal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nam.jobportal.models.UserAccount;


public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {
	Optional<UserAccount> findByEmail(String email);

	Boolean existsByEmail(String email);

}

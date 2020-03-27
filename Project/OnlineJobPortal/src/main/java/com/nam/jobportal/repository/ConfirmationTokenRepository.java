package com.nam.jobportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nam.jobportal.models.ConfirmationToken;

public interface ConfirmationTokenRepository extends JpaRepository<ConfirmationToken, String>{
    ConfirmationToken findByConfirmationToken(String confirmationToken);
}

package com.nam.jobportal.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nam.jobportal.models.*;


public interface UserAccountRepository extends MongoRepository<UserAccount, String> {
	List<UserAccount> findAll();
	List<UserAccount> saveAll();
	UserAccount findByRole_id(String role_id);
	List<UserAccount> findByEnabled(boolean enabled);
	List<UserAccount> findByIs_active(boolean is_active);
	UserAccount findByUseraccount_id(int useraccount_id);
	UserAccount findByEmail(String email);
	UserAccount findByContactnumber(String contactnumber);
	Boolean existsByEmail(String email);
	boolean existByEmail(String email);

}

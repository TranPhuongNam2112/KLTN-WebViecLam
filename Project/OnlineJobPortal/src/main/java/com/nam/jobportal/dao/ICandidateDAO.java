package com.nam.jobportal.dao;

import java.util.List;

import com.nam.jobportal.models.Candidate;
import com.nam.jobportal.specification.SearchCriteria;

public interface ICandidateDAO {
	List<Candidate> searchUser(List<SearchCriteria> params);

	void save(Candidate candidate);
}

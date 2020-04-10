package com.nam.jobportal.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nam.jobportal.dao.ICandidateDAO;
import com.nam.jobportal.exceptions.ResourceNotFoundException;
import com.nam.jobportal.models.Candidate;
import com.nam.jobportal.models.Employer;
import com.nam.jobportal.models.JobLocation;
import com.nam.jobportal.models.JobPost;
import com.nam.jobportal.models.JobType;
import com.nam.jobportal.models.UserAccount;
import com.nam.jobportal.repository.CandidateRepository;
import com.nam.jobportal.repository.EmployerRepository;
import com.nam.jobportal.repository.JobPostRepository;
import com.nam.jobportal.repository.UserAccountRepository;
import com.nam.jobportal.services.CandidateService;
import com.nam.jobportal.services.EmployerService;
import com.nam.jobportal.services.JobLocationService;
import com.nam.jobportal.services.JobService;
import com.nam.jobportal.services.JobTypeService;
import com.nam.jobportal.services.UserAccountService;
import com.nam.jobportal.specification.CandidateSpecificationsBuilder;
import com.nam.jobportal.specification.SearchCriteria;
import com.nam.jobportal.specification.SpecSearchCriteria;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/admin/")
public class AdminDashboardController {

	@Autowired
	private ICandidateDAO service;

	@Autowired
	CandidateService candidateService;
	@Autowired
	UserAccountService userAccountService;
	@Autowired
	EmployerService employerService;
	@Autowired
	JobService jobService;
	@Autowired
	JobLocationService jobLocationService;
	@Autowired
	JobTypeService jobTypeService;

	@Autowired
	CandidateRepository candidateRepository;

	@Autowired
	UserAccountRepository useraccountRepository;

	@Autowired
	EmployerRepository employerRepository;

	@Autowired
	JobPostRepository jobPostResponsitory;

	@GetMapping("/getAllAccounts")
	public ResponseEntity<List<UserAccount>> getAllAccount(

			@RequestParam(defaultValue = "0") Integer pageNo, @RequestParam(defaultValue = "10") Integer pageSize,
			@RequestParam(defaultValue = "id") String sortBy) {
		List<UserAccount> list = userAccountService.getAllAccount(pageNo, pageSize, sortBy);

		return new ResponseEntity<List<UserAccount>>(list, new HttpHeaders(), HttpStatus.OK);
	}

	@GetMapping("/getAccount/{id}")
	public ResponseEntity<UserAccount> getAccountById(@PathVariable("id") Long id) throws ResourceNotFoundException {
		UserAccount userAccount = userAccountService.getAccountById(id);

		return new ResponseEntity<UserAccount>(userAccount, new HttpHeaders(), HttpStatus.OK);
	}

	@GetMapping("/getAllEmployers")
	public ResponseEntity<List<Employer>> getAllEmployers(

			@RequestParam(defaultValue = "0") Integer pageNo, @RequestParam(defaultValue = "10") Integer pageSize,
			@RequestParam(defaultValue = "id") String sortBy) {
		List<Employer> list = employerService.getAllEmployers(pageNo, pageSize, sortBy);

		return new ResponseEntity<List<Employer>>(list, new HttpHeaders(), HttpStatus.OK);
	}

	@GetMapping("/getEmployer/{id}")
	public ResponseEntity<Employer> getEmployerById(@PathVariable("id") Long id) throws ResourceNotFoundException {
		Employer employer = employerService.getEmployerById(id);

		return new ResponseEntity<Employer>(employer, new HttpHeaders(), HttpStatus.OK);
	}

	@GetMapping("/getAllJobPosts")
	public ResponseEntity<List<JobPost>> getAllJobPosts(@RequestParam(defaultValue = "0") Integer pageNo,
			@RequestParam(defaultValue = "10") Integer pageSize, @RequestParam(defaultValue = "id") String sortBy) {
		List<JobPost> jobPostList = jobService.getAllJobPosts(pageNo, pageSize, sortBy);

		return new ResponseEntity<List<JobPost>>(jobPostList, new HttpHeaders(), HttpStatus.OK);
	}

	@GetMapping("/getJobPost/{id}")
	public ResponseEntity<JobPost> getJobPostById(@PathVariable("id") Long id) throws ResourceNotFoundException {
		JobPost jobPost = jobService.getJobPostById(id);

		return new ResponseEntity<JobPost>(jobPost, new HttpHeaders(), HttpStatus.OK);
	}
	@GetMapping("/getAllLocations")

	public ResponseEntity<List<JobLocation>> getAllLocations() {
		List<JobLocation> jobLocationList = jobLocationService.getAllLocations();
		return new ResponseEntity<List<JobLocation>>(jobLocationList, new HttpHeaders(), HttpStatus.OK);
	}
	@GetMapping("/getAllJobTypes")

	public ResponseEntity<List<JobType>> getAllJobTypes() {
		List<JobType> jobTypeList = jobTypeService.getAllJobTypes();
		return new ResponseEntity<List<JobType>>(jobTypeList, new HttpHeaders(), HttpStatus.OK);
	}
	 @PostMapping("/createJobType")
	    public ResponseEntity < JobType > createJobType(@RequestBody JobType jobType) {
	        return ResponseEntity.ok().body(this.jobTypeService.createJobType(jobType));
	    }
	@PutMapping("/updateJobType/{id}")
	public ResponseEntity<JobType> updateJobType(@PathVariable long id, @RequestBody JobType jobType) {
		jobType.setId(id);
	        return ResponseEntity.ok().body(this.jobTypeService.updateJobType(jobType));
	}
	@DeleteMapping("/deleteJobType/{id}")
	public HttpStatus deleteJobTypeById(@PathVariable("id") Long id) throws ResourceNotFoundException {
		jobTypeService.deleteJobTypeById(id);
		return HttpStatus.FORBIDDEN;
	}

	@DeleteMapping("/deleteJobPost/{id}")
	public HttpStatus deleteJobPostById(@PathVariable("id") Long id) throws ResourceNotFoundException {
		jobService.deleteJobPostById(id);
		return HttpStatus.FORBIDDEN;
	}

	@GetMapping("/getAllCandidates")
	public ResponseEntity<List<Candidate>> getAllCandidate(

			@RequestParam(defaultValue = "0") Integer pageNo, @RequestParam(defaultValue = "10") Integer pageSize,
			@RequestParam(defaultValue = "id") String sortBy) {
		List<Candidate> candidatelist = candidateService.getAllCandidate(pageNo, pageSize, sortBy);

		return new ResponseEntity<List<Candidate>>(candidatelist, new HttpHeaders(), HttpStatus.OK);
	}

	@GetMapping("/getCandidate/{id}")
	public ResponseEntity<Candidate> getCandidateById(@PathVariable("id") Long id) throws ResourceNotFoundException {
		Candidate candidate = candidateService.getCandidateById(id);

		return new ResponseEntity<Candidate>(candidate, new HttpHeaders(), HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/candidate")
	@ResponseBody
	public List<Candidate> search(@RequestParam(value = "search", required = false) String search) {
		List<SearchCriteria> params = new ArrayList<SearchCriteria>();
		if (search != null) {
			Pattern pattern = Pattern.compile("(\\w+?)(:|<|>)(\\w+?),");
			Matcher matcher = pattern.matcher(search + ",");
			while (matcher.find()) {
				params.add(new SearchCriteria(matcher.group(1), matcher.group(2), matcher.group(3)));
			}
		}
		return service.searchUser(params);
	}

	@GetMapping("/candidates")
	public ResponseEntity<List<Candidate>> getCandidatesByGender(@RequestParam(required = false) String gender,
			@RequestParam(defaultValue = "0") Integer pageNo, @RequestParam(defaultValue = "10") Integer pageSize,
			@RequestParam(defaultValue = "id") String sortBy) {
		List<Candidate> list = candidateService.getCandidateByGender(gender, pageNo, pageSize, sortBy);

		return new ResponseEntity<List<Candidate>>(list, new HttpHeaders(), HttpStatus.OK);
	}

//	@GetMapping("/candidates")
//	public ResponseEntity<List<Candidate>> getCandidatesByDoBBetween(
//			@RequestParam(required = false) Date startDate,
//			@RequestParam(required = false) Date endDate,
//			@RequestParam(defaultValue = "0") Integer pageNo, 
//			@RequestParam(defaultValue = "10") Integer pageSize,
//			@RequestParam(defaultValue = "id") String sortBy) 
//	{
//		List<Candidate> list = candidateService.getCandidateByDateBetween(startDate, endDate, pageNo, pageSize, sortBy);
//
//		return new ResponseEntity<List<Candidate>>(list, new HttpHeaders(), HttpStatus.OK); 
//	}

//	@GetMapping("/candidates")
//	public ResponseEntity<List<Candidate>> getCandidateByPhoneNumber(
//			@RequestParam(required = false) String phonenumber,
//			@RequestParam(required = false) Date endDate,
//			@RequestParam(defaultValue = "0") Integer pageNo, 
//			@RequestParam(defaultValue = "10") Integer pageSize,
//			@RequestParam(defaultValue = "id") String sortBy) 
//	{
//		List<Candidate> list = candidateService.getCandidateByPhoneNumber(phonenumber, pageNo, pageSize, sortBy);
//
//		return new ResponseEntity<List<Candidate>>(list, new HttpHeaders(), HttpStatus.OK); 
//	}

}

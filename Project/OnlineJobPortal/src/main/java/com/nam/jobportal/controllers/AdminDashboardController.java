package com.nam.jobportal.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
import com.nam.jobportal.repository.JobLocationRepository;
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
	
	@Autowired
	JobLocationRepository jobLocationRepository;

	@GetMapping("/getAllAccounts")
	public Page<UserAccount> getAllAccount(@RequestParam(defaultValue = "0") int pageNo,
			@RequestParam(defaultValue = "5")int pageSize,
			@RequestParam(defaultValue = "id") String sortBy
			) {
		  Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
		return useraccountRepository.findAll(pageable);
	}

	@GetMapping("/getAccount/{id}")
	public ResponseEntity<UserAccount> getAccountById(@PathVariable("id") Long id) throws ResourceNotFoundException {
		UserAccount userAccount = userAccountService.getAccountById(id);

		return new ResponseEntity<UserAccount>(userAccount, new HttpHeaders(), HttpStatus.OK);
	}
	@GetMapping("/getAllCandidates")

	public Page<Candidate> getAllCandidates(@RequestParam(defaultValue = "0") int pageNo,
			@RequestParam(defaultValue = "5")int pageSize,
			@RequestParam(defaultValue = "id") String sortBy
			) {
		  Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
		return candidateRepository.findAll(pageable);
	}


	@GetMapping("/getCandidate/{id}")
	public ResponseEntity<Candidate> getCandidateById(@PathVariable("id") Long id) throws ResourceNotFoundException {
		Candidate candidate = candidateService.getCandidateById(id);

		return new ResponseEntity<Candidate>(candidate, new HttpHeaders(), HttpStatus.OK);
	}
	@GetMapping("/getAllEmployers")
	public Page<Employer> getAllEmployers(@RequestParam(defaultValue = "0") int pageNo,
			@RequestParam(defaultValue = "5")int pageSize,
			@RequestParam(defaultValue = "id") String sortBy
			) {
		  Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
		return employerRepository.findAll(pageable);
	}

	@GetMapping("/getEmployer/{id}")
	public ResponseEntity<Employer> getEmployerById(@PathVariable("id") Long id) throws ResourceNotFoundException {
		Employer employer = employerService.getEmployerById(id);

		return new ResponseEntity<Employer>(employer, new HttpHeaders(), HttpStatus.OK);
	}

	@GetMapping("/getAllLocations")

	public Page<JobLocation> getAllLocations(@RequestParam(defaultValue = "0") int pageNo,
			@RequestParam(defaultValue = "5")int pageSize,
			@RequestParam(defaultValue = "id") String sortBy
			) {
		  Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
		return jobLocationRepository.findAll(pageable);
	}
	@GetMapping("/getJobLocation/{id}")
	public ResponseEntity<JobLocation> getJobLocation(@PathVariable("id") Long id) throws ResourceNotFoundException {
		JobLocation jobLocation = jobLocationService.getJobLocationById(id);

		return new ResponseEntity<JobLocation>(jobLocation, new HttpHeaders(), HttpStatus.OK);
	}
	@GetMapping("/getAllJobPosts")
	public Page<JobPost> getAllJobPosts(@RequestParam(defaultValue = "0") int pageNo,
			@RequestParam(defaultValue = "5")int pageSize,
			@RequestParam(defaultValue = "id") String sortBy
			) {
		  Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
		return jobPostResponsitory.findAll(pageable);
	}

	@GetMapping("/getJobPost/{id}")
	public ResponseEntity<JobPost> getJobPostById(@PathVariable("id") Long id) throws ResourceNotFoundException {
		JobPost jobPost = jobService.getJobPostById(id);

		return new ResponseEntity<JobPost>(jobPost, new HttpHeaders(), HttpStatus.OK);
	}
	@DeleteMapping("/deleteJobPost/{id}")
	public HttpStatus deleteJobPostById(@PathVariable("id") Long id) throws ResourceNotFoundException {
		jobService.deleteJobPostById(id);
		return HttpStatus.OK;
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
	 @GetMapping("/getJobType/{id}")
		public ResponseEntity<JobType> getJobTypeById(@PathVariable("id") Long id) throws ResourceNotFoundException {
		 JobType jobTyoe = jobTypeService.getJobTypeById(id);

			return new ResponseEntity<JobType>(jobTyoe, new HttpHeaders(), HttpStatus.OK);
		}
	@PutMapping("/updateJobType/{id}")
	public ResponseEntity<JobType> updateJobType(@PathVariable long id, @RequestBody JobType jobType) {
		jobType.setId(id);
	        return ResponseEntity.ok().body(this.jobTypeService.updateJobType(jobType));
	}
	@DeleteMapping("/deleteJobType/{id}")
	public HttpStatus deleteJobTypeById(@PathVariable("id") Long id) throws ResourceNotFoundException {
		jobTypeService.deleteJobTypeById(id);
		return HttpStatus.OK;
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

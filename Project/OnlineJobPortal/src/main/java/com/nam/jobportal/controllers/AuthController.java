package com.nam.jobportal.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nam.jobportal.models.ConfirmationToken;
import com.nam.jobportal.models.ERole;
import com.nam.jobportal.models.Role;
import com.nam.jobportal.models.*;
import com.nam.jobportal.payload.request.LoginRequest;
import com.nam.jobportal.payload.request.SignupRequest;
import com.nam.jobportal.payload.response.JwtResponse;
import com.nam.jobportal.payload.response.MessageResponse;
import com.nam.jobportal.repository.CandidateRepository;
import com.nam.jobportal.repository.ConfirmationTokenRepository;
import com.nam.jobportal.repository.RoleRepository;
import com.nam.jobportal.repository.UserAccountRepository;
import com.nam.jobportal.security.jwt.JwtUtils;
import com.nam.jobportal.security.services.UserDetailsImpl;
import com.nam.jobportal.services.EmailSenderService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserAccountRepository userAccountRepository;

	@Autowired
	CandidateRepository candidateRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	EmailSenderService emailSenderService;
	
	@Autowired
	ConfirmationTokenRepository confirmationTokenRepository;
	
	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse(jwt, 
				userDetails.getId(), 
				userDetails.getFirstname(),
				userDetails.getLastname(),
				userDetails.getEmail(), 
				roles));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		if (userAccountRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}
		UserAccount user = new UserAccount(signUpRequest.getFirstname(),signUpRequest.getLastname(), 
				signUpRequest.getEmail(),
				encoder.encode(signUpRequest.getPassword()));



		Set<String> strRoles = signUpRequest.getRoles();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role candidateRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(candidateRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "admin":
					Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(adminRole);

					break;
				case "employer":
					Role employerRole = roleRepository.findByName(ERole.ROLE_EMPLOYER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(employerRole);
					//Employer employer = new Employer()
					

					break;
				case "candidate":
					Role candidateRole = roleRepository.findByName(ERole.ROLE_CANDIDATE)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(candidateRole);
					//Candidate candidate = new Candidate();

					break;
				default:
					Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
			});
		}

		user.setRoles(roles);
		userAccountRepository.save(user);
		ConfirmationToken confirmationToken = new ConfirmationToken(user);

		confirmationTokenRepository.save(confirmationToken);

		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setTo(user.getEmail());
		mailMessage.setSubject("Complete Registration!");
		mailMessage.setFrom("chand312902@gmail.com");
		mailMessage.setText("To confirm your account, please click here : "
				+"http://localhost:8082/confirm-account?token="+confirmationToken.getConfirmationToken());

		emailSenderService.sendEmail(mailMessage);
		

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
	

}


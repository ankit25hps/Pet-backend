package com.cognizant.cohort57.pod2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.cohort57.pod2.model.Account;
import com.cognizant.cohort57.pod2.service.ILoginService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/authenticate")

public class AuthenticationController {

	@Autowired
	private ILoginService loginService;

	@PostMapping("/validatePetOwner")
	public ResponseEntity<?> validatePetOwner(@RequestBody Account account) {

		String userEmail = account.getUserEmail();
		String userPassword = account.getUserPassword();

		try {
			Account accountInfoRes = loginService.validatePetOwner(userEmail, userPassword);
			if (accountInfoRes == null)
				throw new Exception("User Not Found, please register or enter correct credentials");

			return new ResponseEntity<>(accountInfoRes, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@PostMapping("/createPetOwnerAccount")
	public ResponseEntity<?> createPetOwnerAccount(@RequestBody Account account) {

		try {
			int res = loginService.createPetOwnerAccount(account);
			if (res == 0)
				throw new Exception("Fail to Create Account");
			else if(res == -1)
				return new ResponseEntity<>(res, HttpStatus.CONFLICT);
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

}
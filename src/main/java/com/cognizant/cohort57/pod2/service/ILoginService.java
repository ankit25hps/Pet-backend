package com.cognizant.cohort57.pod2.service;

import com.cognizant.cohort57.pod2.model.Account;

public interface ILoginService {

	int createPetOwnerAccount(Account account);

	Account validatePetOwner(String userEmail, String userPassword);
	

}

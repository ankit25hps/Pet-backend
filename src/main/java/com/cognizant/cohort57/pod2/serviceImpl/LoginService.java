package com.cognizant.cohort57.pod2.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.cohort57.pod2.entity.PetClinicAccount;
import com.cognizant.cohort57.pod2.model.Account;
import com.cognizant.cohort57.pod2.repository.PetClinicAccountRepository;
import com.cognizant.cohort57.pod2.service.ILoginService;

@Service
public class LoginService implements ILoginService {

	@Autowired
	private PetClinicAccountRepository _petClinicAccountRepository;

	@Override
	public int createPetOwnerAccount(Account account) {

		int res;
		String userName = account.getUserName();
		String userEmail = account.getUserEmail();
		String userPassword = account.getUserPassword();
		PetClinicAccount petClinicAccount = _petClinicAccountRepository.checkNewAccount(userEmail);
		if (petClinicAccount != null) {
			res = -1;
		} else {
			res = _petClinicAccountRepository.createPetOwnerAccount(userName, userEmail, userPassword);
		}
		return res;
	}

	@Override
	public Account validatePetOwner(String userEmail, String userPassword) {

		PetClinicAccount petClinicAccount = _petClinicAccountRepository.validatePetOwner(userEmail, userPassword);

		if (petClinicAccount == null)
			return null;
		Account accountResponseObj = new Account();

		accountResponseObj.setUserId(petClinicAccount.getUserId());
		accountResponseObj.setUserName(petClinicAccount.getUserName());
		accountResponseObj.setUserEmail(petClinicAccount.getUserEmail());

		return accountResponseObj;
	}

}

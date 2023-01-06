package com.cognizant.cohort57.pod2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.cohort57.pod2.entity.PetClinicAccount;

@Repository
public interface PetClinicAccountRepository extends JpaRepository<PetClinicAccount, Integer> {

	@Query(value = "SELECT * FROM Account as acc WHERE acc.UserEmail = ?1 AND acc.UserPassword = ?2 AND IsActive = 1 ; ", nativeQuery = true)
	PetClinicAccount validatePetOwner(String userEmail, String userPassword);

	@Modifying
	@Transactional
	@Query(value = "INSERT INTO Account(UserName, UserEmail, UserPassword) "
			+ "VALUES(:userName, :userEmail, :userPassword);", nativeQuery = true)
	int createPetOwnerAccount(@Param("userName") String userName, @Param("userEmail") String userEmail,
			@Param("userPassword") String userPassword);
	
	@Query(value = "SELECT * FROM Account as acc WHERE acc.UserEmail = ?1 AND IsActive = 1 ; ", nativeQuery = true)
	PetClinicAccount checkNewAccount(String userEmail);
}

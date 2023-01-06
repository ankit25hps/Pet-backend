package com.cognizant.cohort57.pod2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.cohort57.pod2.entity.PetClinicPetInfo;

@Repository
public interface PetInfoRepository extends JpaRepository<PetClinicPetInfo, Integer> {

	@Query(value = "SELECT * FROM PetInfo WHERE UserId =?1 AND IsActive=1 ;", nativeQuery = true)
	List<PetClinicPetInfo> getPetInfoDetailsByUserId(int userId);

	@Modifying
	@Transactional
	@Query(value = "INSERT INTO PetInfo( UserId, PetName, PetAge,"
			+ "PetBreed, PetGender, PetHairCoatType, PetWeight, PetColor) "
			+ "VALUES(:userId, :petName, :petAge, :petBreed, :petGender, :petHairCoatType, :petWeight, :petColor);", nativeQuery = true)
	int addPetInfo(@Param("userId") int userId, @Param("petName") String petName, @Param("petAge") double petAge,
			@Param("petBreed") String petBreed, @Param("petGender") String petGender,
			@Param("petHairCoatType") String petHairCoatType, @Param("petWeight") double petWeight,
			@Param("petColor") String petColor);

	@Modifying
	@Transactional
	@Query(value = "UPDATE PetInfo SET UserID = :userId, PetName = :petName, PetAge = :petAge, "
			+ "PetBreed = :petBreed, PetGender = :petGender, PetHairCoatType = :petHairCoatType, PetWeight = :petWeight, PetColor = :petColor"
			+ " WHERE PetId = :petId ;", nativeQuery = true)
	int updatePetInfo(@Param("petId") int petId, @Param("userId") int userId, @Param("petName") String petName,
			@Param("petAge") double petAge, @Param("petBreed") String petBreed, @Param("petGender") String petGender,
			@Param("petHairCoatType") String petHairCoatType, @Param("petWeight") double petWeight,
			@Param("petColor") String petColor);

	@Modifying
	@Transactional
	@Query(value = "UPDATE PetInfo SET IsActive = 0 WHERE PetId = :petId ;", nativeQuery = true)
	int deletePetInfo(@Param("petId") int petId);
	
	@Query(value = "SELECT * FROM PetInfo WHERE UserId =?1 AND PetName =?2 AND IsActive=1 ;", nativeQuery = true)
	PetClinicPetInfo verifyPetName(int userId, String petName);

}

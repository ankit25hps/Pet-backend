package com.cognizant.cohort57.pod2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.cohort57.pod2.entity.LkpPetHairCoat;

@Repository
public interface PetHairCoatRepository extends JpaRepository<LkpPetHairCoat, Integer> {

	@Query(value = "SELECT * FROM Lkp_PetHairCoat WHERE IsActive = 1;", nativeQuery = true)
	List<LkpPetHairCoat> getPetHairCoat();

}

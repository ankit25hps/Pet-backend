package com.cognizant.cohort57.pod2.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Lkp_PetHairCoat")
public class LkpPetHairCoat {

	@Id
	@GeneratedValue
	@Column(name = "PetHairCoatId")
	private int petHairCoatId;

	@Column(name = "PetHairCoatType")
	private String petHairCoatType;

	public LkpPetHairCoat() {
	}

	public int getPetHairCoatId() {
		return petHairCoatId;
	}

	public void setPetHairCoatId(int petHairCoatId) {
		this.petHairCoatId = petHairCoatId;
	}

	public String getPetHairCoatType() {
		return petHairCoatType;
	}

	public void setPetHairCoatType(String petHairCoatType) {
		this.petHairCoatType = petHairCoatType;
	}

}

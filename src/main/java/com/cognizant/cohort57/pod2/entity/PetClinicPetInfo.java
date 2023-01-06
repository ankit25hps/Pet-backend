package com.cognizant.cohort57.pod2.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "PetInfo")
public class PetClinicPetInfo {

	@Id
	@GeneratedValue
	@Column(name = "PetId")
	private int petId;

	@Column(name = "UserId")
	private int userId;

	@Column(name = "PetName")
	private String petName;

	@Column(name = "PetAge")
	private double petAge;

	@Column(name = "PetBreed")
	private String petBreed;

	@Column(name = "PetGender")
	private String petGender;

	@Column(name = "PetHairCoatType")
	private String petHairCoatType;

	@Column(name = "PetWeight")
	private double petWeight;

	@Column(name = "PetColor")
	private String petColor;

	public PetClinicPetInfo() {
	}

	public int getPetId() {
		return petId;
	}

	public void setPetId(int petId) {
		this.petId = petId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getPetName() {
		return petName;
	}

	public void setPetName(String petName) {
		this.petName = petName;
	}

	public double getPetAge() {
		return petAge;
	}

	public void setPetAge(double petAge) {
		this.petAge = petAge;
	}

	public String getPetBreed() {
		return petBreed;
	}

	public void setPetBreed(String petBreed) {
		this.petBreed = petBreed;
	}

	public String getPetGender() {
		return petGender;
	}

	public void setPetGender(String petGender) {
		this.petGender = petGender;
	}

	public String getPetHairCoatType() {
		return petHairCoatType;
	}

	public void setPetHairCoatType(String petHairCoatType) {
		this.petHairCoatType = petHairCoatType;
	}

	public double getPetWeight() {
		return petWeight;
	}

	public void setPetWeight(double petWeight) {
		this.petWeight = petWeight;
	}

	public String getPetColor() {
		return petColor;
	}

	public void setPetColor(String petColor) {
		this.petColor = petColor;
	}

}

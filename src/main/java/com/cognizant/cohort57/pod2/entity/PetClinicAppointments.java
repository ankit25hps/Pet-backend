package com.cognizant.cohort57.pod2.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Appointments")
public class PetClinicAppointments {

	@Id
	@GeneratedValue
	@Column(name = "AppointmentId")
	private int appointmentId;

	@Column(name = "UserId")
	private int userId;

	@Column(name = "PetName")
	private String petName;

	@Column(name = "DateOfAppointment")
	private Date dateOfAppointment;

	@Column(name = "TimeOfAppointment")
	private String timeOfAppointment;

	@Column(name = "UserPhoneNumber")
	private long userPhoneNumber;

	@Column(name = "ReasonOfAppointment")
	private String reasonOfAppointment;

	@Column(name = "PetAllergies")
	private String petAllergies;

	@Column(name = "PreviousMedicationStatus")
	private String previousMedicationStatus;

	@Column(name = "ProcedureRequested")
	private String procedureRequested;

	public PetClinicAppointments() {
	}

	public int getAppointmentId() {
		return appointmentId;
	}

	public void setAppointmentId(int appointmentId) {
		this.appointmentId = appointmentId;
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

	public Date getDateOfAppointment() {
		return dateOfAppointment;
	}

	public void setDateOfAppointment(Date dateOfAppointment) {
		this.dateOfAppointment = dateOfAppointment;
	}

	public String getTimeOfAppointment() {
		return timeOfAppointment;
	}

	public void setTimeOfAppointment(String timeOfAppointment) {
		this.timeOfAppointment = timeOfAppointment;
	}

	public long getUserPhoneNumber() {
		return userPhoneNumber;
	}

	public void setUserPhoneNumber(long userPhoneNumber) {
		this.userPhoneNumber = userPhoneNumber;
	}

	public String getReasonOfAppointment() {
		return reasonOfAppointment;
	}

	public void setReasonOfAppointment(String reasonOfAppointment) {
		this.reasonOfAppointment = reasonOfAppointment;
	}

	public String getPetAllergies() {
		return petAllergies;
	}

	public void setPetAllergies(String petAllergies) {
		this.petAllergies = petAllergies;
	}

	public String getPreviousMedicationStatus() {
		return previousMedicationStatus;
	}

	public void setPreviousMedicationStatus(String previousMedicationStatus) {
		this.previousMedicationStatus = previousMedicationStatus;
	}

	public String getProcedureRequested() {
		return procedureRequested;
	}

	public void setProcedureRequested(String procedureRequested) {
		this.procedureRequested = procedureRequested;
	}

}
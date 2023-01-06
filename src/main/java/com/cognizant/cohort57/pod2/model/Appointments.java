package com.cognizant.cohort57.pod2.model;

import java.sql.Date;

public class Appointments {

	private int appointmentId;

	private int userId;

	private String petName;

	private Date dateOfAppointment;

	private String timeOfAppointment;

	private long userPhoneNumber;

	private String reasonOfAppointment;

	private String petAllergies;

	private String previousMedicationStatus;

	private String procedureRequested;

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

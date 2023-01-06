package com.cognizant.cohort57.pod2.service;

import java.util.List;

import com.cognizant.cohort57.pod2.model.Appointments;
import com.cognizant.cohort57.pod2.model.PetHairCoat;
import com.cognizant.cohort57.pod2.model.PetInfo;

public interface IPetClinicService {

	List<PetInfo> getPetInfoDetailsByUserId(int userId);

	List<Appointments> getAppointmentDetailsByUserId(int userId);

	List<PetHairCoat> getPetHairCoat();

	int addAppointments(Appointments appointments);

	int deleteAppointments(int appointmentId);

	int addOrUpdatePetInfo(PetInfo petInfo);

	int deletePetInfo(int petId);

}

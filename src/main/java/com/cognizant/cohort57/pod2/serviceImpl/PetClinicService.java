package com.cognizant.cohort57.pod2.serviceImpl;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.cohort57.pod2.entity.LkpPetHairCoat;
import com.cognizant.cohort57.pod2.entity.PetClinicAppointments;
import com.cognizant.cohort57.pod2.entity.PetClinicPetInfo;
import com.cognizant.cohort57.pod2.model.Appointments;
import com.cognizant.cohort57.pod2.model.PetHairCoat;
import com.cognizant.cohort57.pod2.model.PetInfo;
import com.cognizant.cohort57.pod2.repository.AppointmentsRepository;
import com.cognizant.cohort57.pod2.repository.PetHairCoatRepository;
import com.cognizant.cohort57.pod2.repository.PetInfoRepository;
import com.cognizant.cohort57.pod2.service.IPetClinicService;

@Service
public class PetClinicService implements IPetClinicService {

	@Autowired
	private PetInfoRepository _petInfoRepository;
	@Autowired
	private AppointmentsRepository _appointmentsRepository;

	@Autowired
	private PetHairCoatRepository _petHairCoatRepository;

	@Override
	public List<PetInfo> getPetInfoDetailsByUserId(int userId) {

		List<PetInfo> petInfoDetails = new ArrayList<>();
		List<PetClinicPetInfo> petInfoDetailsByUserIdList = _petInfoRepository.getPetInfoDetailsByUserId(userId);
		if (petInfoDetailsByUserIdList == null)
			return null;

		for (PetClinicPetInfo petinfo : petInfoDetailsByUserIdList) {
			PetInfo petInfoObj = new PetInfo();
			petInfoObj.setPetId(petinfo.getPetId());
			petInfoObj.setUserId(petinfo.getUserId());
			petInfoObj.setPetName(petinfo.getPetName());
			petInfoObj.setPetAge(petinfo.getPetAge());
			petInfoObj.setPetBreed(petinfo.getPetBreed());
			petInfoObj.setPetGender(petinfo.getPetGender());
			petInfoObj.setPetHairCoatType(petinfo.getPetHairCoatType());
			petInfoObj.setPetWeight(petinfo.getPetWeight());
			petInfoObj.setPetColor(petinfo.getPetColor());
			petInfoDetails.add(petInfoObj);
		}

		return petInfoDetails;

	}

	@Override
	public List<Appointments> getAppointmentDetailsByUserId(int userId) {

		List<Appointments> appointmentsList = new ArrayList<>();
		List<PetClinicAppointments> petClinicAppointmentsList = _appointmentsRepository
				.getAppointmentDetailsByUserId(userId);
		if (petClinicAppointmentsList == null)
			return null;
		for (PetClinicAppointments appointmentdetails : petClinicAppointmentsList) {
			Appointments appointmentsObj = new Appointments();
			appointmentsObj.setAppointmentId(appointmentdetails.getAppointmentId());
			appointmentsObj.setUserId(appointmentdetails.getUserId());
			appointmentsObj.setPetName(appointmentdetails.getPetName());
			appointmentsObj.setDateOfAppointment(appointmentdetails.getDateOfAppointment());
			appointmentsObj.setTimeOfAppointment(appointmentdetails.getTimeOfAppointment());
			appointmentsObj.setUserPhoneNumber(appointmentdetails.getUserPhoneNumber());
			appointmentsObj.setReasonOfAppointment(appointmentdetails.getReasonOfAppointment());
			appointmentsObj.setPetAllergies(appointmentdetails.getPetAllergies());
			appointmentsObj.setPreviousMedicationStatus(appointmentdetails.getPreviousMedicationStatus());
			appointmentsObj.setProcedureRequested(appointmentdetails.getProcedureRequested());
			appointmentsList.add(appointmentsObj);
		}

		return appointmentsList;
	}

	@Override
	public int addAppointments(Appointments appointments) {

		int res;
		int userId = appointments.getUserId();
		String petName = appointments.getPetName();
		Date dateOfAppointment = appointments.getDateOfAppointment();
		String timeOfAppointment = appointments.getTimeOfAppointment();
		long userPhoneNumber = appointments.getUserPhoneNumber();
		String reasonOfAppointment = appointments.getReasonOfAppointment();
		String petAllergies = appointments.getPetAllergies();
		String previousMedicationStatus = appointments.getPreviousMedicationStatus();
		String procedureRequested = appointments.getProcedureRequested();

		PetClinicPetInfo petInfoDetails = _petInfoRepository.verifyPetName(userId, petName);
		if (petInfoDetails == null)
			res = -1;
		else {
			res = _appointmentsRepository.addAppointments(userId, petName, dateOfAppointment, timeOfAppointment,
					userPhoneNumber, reasonOfAppointment, petAllergies, previousMedicationStatus, procedureRequested);
		}
		return res;
	}

	@Override
	public List<PetHairCoat> getPetHairCoat() {

		List<PetHairCoat> petHairCoatList = new ArrayList<>();
		List<LkpPetHairCoat> lkpPetHairCoatList = _petHairCoatRepository.getPetHairCoat();
		if (lkpPetHairCoatList == null)
			return null;
		for (LkpPetHairCoat lkpPetHairCoat : lkpPetHairCoatList) {
			PetHairCoat petHairCoatObj = new PetHairCoat();
			petHairCoatObj.setPetHairCoatId(lkpPetHairCoat.getPetHairCoatId());
			petHairCoatObj.setPetHairCoatType(lkpPetHairCoat.getPetHairCoatType());
			petHairCoatList.add(petHairCoatObj);
		}

		return petHairCoatList;
	}

	@Override
	public int deleteAppointments(int appointmentId) {

		int res = _appointmentsRepository.deleteAppointments(appointmentId);
		return res;
	}

	@Override
	public int addOrUpdatePetInfo(PetInfo petInfo) {

		int petId = petInfo.getPetId();
		int userId = petInfo.getUserId();
		String petName = petInfo.getPetName();
		double petAge = petInfo.getPetAge();
		String petBreed = petInfo.getPetBreed();
		String petGender = petInfo.getPetGender();
		String petHairCoatType = petInfo.getPetHairCoatType();
		double petWeight = petInfo.getPetWeight();
		String petColor = petInfo.getPetColor();

		if (petId == 0) {
			int res = _petInfoRepository.addPetInfo(userId, petName, petAge, petBreed, petGender, petHairCoatType,
					petWeight, petColor);

			return res;
		} else {
			int res = _petInfoRepository.updatePetInfo(petId, userId, petName, petAge, petBreed, petGender,
					petHairCoatType, petWeight, petColor);
			return res;
		}
	}

	@Override
	public int deletePetInfo(int petId) {
		int res = _petInfoRepository.deletePetInfo(petId);
		return res;
	}

}

package com.cognizant.cohort57.pod2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.cohort57.pod2.model.Appointments;
import com.cognizant.cohort57.pod2.model.PetHairCoat;
import com.cognizant.cohort57.pod2.model.PetInfo;
import com.cognizant.cohort57.pod2.service.IPetClinicService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/pet")
public class PetController {

	@Autowired
	private IPetClinicService _petClinicService;


	@GetMapping("/getPetInfoDetailsByUserId")
	public ResponseEntity<?> getPetInfoDetailsByUserId(@RequestParam int userId) {

		try {
			List<PetInfo> petInfoRes = _petClinicService.getPetInfoDetailsByUserId(userId);
			if (petInfoRes == null)
				throw new Exception("Error in Fetching Appointment Details");

			return new ResponseEntity<>(petInfoRes, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@GetMapping("/getAppointmentDetailsByUserId")
	public ResponseEntity<?> getAppointmentDetailsByUserId(@RequestParam int userId) {

		try {
			List<Appointments> appointmentDetailsRes = _petClinicService.getAppointmentDetailsByUserId(userId);
			if (appointmentDetailsRes == null)
				throw new Exception("Error in Fetching Appointment Details By User Id");

			return new ResponseEntity<>(appointmentDetailsRes, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}

	}

	@GetMapping("/getPetHairCoat")
	public ResponseEntity<?> getPetHairCoat() {

		try {
			List<PetHairCoat> petHairCoatRes = _petClinicService.getPetHairCoat();
			if (petHairCoatRes == null)
				throw new Exception("Error in Fetching Pet Hair Coat");

			return new ResponseEntity<>(petHairCoatRes, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@PostMapping("/addAppointments")
	public ResponseEntity<?> addAppointments(@RequestBody Appointments appointments) {

		try {
			int res = _petClinicService.addAppointments(appointments);
			if (res == 0)
				throw new Exception("Fail to Add Appointment");
			else if(res == -1)
				return new ResponseEntity<>(res, HttpStatus.CONFLICT);
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@DeleteMapping("/deleteAppointments")
	public ResponseEntity<?> deleteAppointments(@RequestParam int appointmentId) {

		try {
			int res = _petClinicService.deleteAppointments(appointmentId);
			if (res == 0)
				throw new Exception("Fail to Delete Appointment");
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@PostMapping("/addOrUpdatePetInfo")
	public ResponseEntity<?> addOrUpdatePetInfo(@RequestBody PetInfo petInfo) {

		try {
			int res = _petClinicService.addOrUpdatePetInfo(petInfo);
			if (res == 0)
				throw new Exception("Fail to Add PetInfo");
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@DeleteMapping("/deletePetInfo")
	public ResponseEntity<?> deletePetInfo(@RequestParam int petId) {

		try {
			int res = _petClinicService.deletePetInfo(petId);
			if (res == 0)
				throw new Exception("Fail to Delete PetInfo");
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

}
package com.cognizant.cohort57.pod2.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.cohort57.pod2.entity.PetClinicAppointments;
					
@Repository
public interface AppointmentsRepository extends JpaRepository<PetClinicAppointments, Integer> {

	@Query(value = "SELECT * FROM Appointments WHERE UserId = ?1 AND IsActive = 1 ;", nativeQuery = true)
	List<PetClinicAppointments> getAppointmentDetailsByUserId(int userId);
	
	@Modifying
	@Transactional
	@Query(value = "INSERT INTO Appointments( UserId, PetName, DateOfAppointment,"
			+ "TimeOfAppointment, UserPhoneNumber, ReasonOfAppointment, PetAllergies, PreviousMedicationStatus, ProcedureRequested) "
			+ "VALUES(:userId, :petName, :dateOfAppointment, :timeOfAppointment, :userPhoneNumber, :reasonOfAppointment, :petAllergies, :previousMedicationStatus, :procedureRequested);", nativeQuery = true)
	int addAppointments(
			@Param("userId") int userId, 
			@Param("petName") String petName,
			@Param("dateOfAppointment") Date dateOfAppointment,
			@Param("timeOfAppointment") String timeOfAppointment,
			@Param("userPhoneNumber") long userPhoneNumber,
			@Param("reasonOfAppointment") String reasonOfAppointment,
			@Param("petAllergies") String petAllergies,
			@Param("previousMedicationStatus") String previousMedicationStatus,
			@Param("procedureRequested") String procedureRequested
			);
	
	@Modifying
	@Transactional
	@Query(value = "UPDATE Appointments SET IsActive = 0 WHERE AppointmentId = :appointmentId ;", nativeQuery = true)
	int deleteAppointments(@Param("appointmentId") int appointmentId);
}

package com.cognizant.cohort57.pod2.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Lkp_TimeSlot")
public class LkpTimeSlot {

	@Id
	@GeneratedValue
	@Column(name = "TimeSlotId")
	private int timeSlotId;

	@Column(name = "TimeSlots")
	private String timeSlots;

	public LkpTimeSlot() {
	}

	public int getTimeSlotId() {
		return timeSlotId;
	}

	public void setTimeSlotId(int timeSlotId) {
		this.timeSlotId = timeSlotId;
	}

	public String getTimeSlots() {
		return timeSlots;
	}

	public void setTimeSlots(String timeSlots) {
		this.timeSlots = timeSlots;
	}

}

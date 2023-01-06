package com.cognizant.cohort57.pod2.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Account")
public class PetClinicAccount {

	@Id
	@GeneratedValue
	@Column(name = "UserId")
	private int userId;

	@Column(name = "UserName")
	private String userName;

	@Column(name = "UserEmail")
	private String userEmail;

	@Column(name = "UserPassword")
	private String userPassword;

	@Column(name = "RoleId")
	private int roleId;

	public PetClinicAccount() {
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

}
package com.cognizant.cohort57.pod2.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Lkp_Role")
public class LkpRole {

	@Id
	@GeneratedValue
	@Column(name = "RoleId")
	private int roleId;

	@Column(name = "RoleName")
	private String roleName;

	public LkpRole() {
	}

	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

}

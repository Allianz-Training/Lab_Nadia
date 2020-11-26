package com.Allianz.oop;

public class EmployeeSpecial extends Employee {
	
	private String specialSkill;
	public EmployeeSpecial(String firstnameInput, String lastnameInput, int salaryInput, String positionInput) {
		super(firstnameInput, lastnameInput, salaryInput, positionInput);
	}
	
	public EmployeeSpecial(String firstnameInput, String lastnameInput, int salaryInput, String positionInput, String specialSkill) {
		this(firstnameInput, lastnameInput, salaryInput, positionInput);
		this.specialSkill = specialSkill;
	}
}

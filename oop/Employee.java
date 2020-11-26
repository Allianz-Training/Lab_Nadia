package com.Allianz.oop;

public class Employee {

	public String firstname;
	public String lastname;
	private int salary;
	public static String position;

	public static void main(String[] args) {
		Employee em1 = new Employee("Chayanid", "Maruhkin", 251271, "front-end");
		em1.checkPositions();
		Employee em2 = new Employee("Justin", "Bieber", 123456, "Artist");
		em2.checkPositions();
		Employee[] employees = new Employee[3];
		for (int i = 0; i < employees.length; i++) {
			employees[i] = new Employee("Firstname" + i, "last " + i, 1000 * i, "position " + i);
		}
		System.out.println(employees[2].getSalary());
	}

	public void checkPositions() {
		System.out.println(firstname + "\'s" + " position is " + position);
	}

	public Employee(String firstnameInput, String lastnameInput, int salaryInput, String positionInput) {
		firstname = firstnameInput;
		lastname = lastnameInput;
		salary = salaryInput;
		position = positionInput;
	}

	public void hello() {
		System.out.println("Hello " + firstname);
	}

	public int getSalary() {
		return salary;
	}

}

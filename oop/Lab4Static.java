package com.Allianz.oop;

public class Lab4Static {
	public static String str1,a;
	public static void main(String[] args) {
		noReturn();
		returnValue();
		System.out.println(a);
	}
	public static void noReturn() {
		System.out.println("No Return");
	}
	public static String returnValue() {
		a = "Return";
		return a;
	}
	
}

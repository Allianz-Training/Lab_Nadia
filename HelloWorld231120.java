package com.Allianz.HelloWorld;

public class HelloWorld231120 {
	public static void main(String[] args) {
		System.out.println("Hello World");
		int i = 0;
		boolean x = true;
		String text = "String";
		System.out.println(
				"This is an integer: " + i + "\n" + "This is a boolean: " + x + "\n" + "This is a string: " + text);
		bark();
		changeType();
		final String hello = "Hello";
		// hello = "World";
		System.out.println("hello = " + hello);
		ifElse();
		switchCase();
		whileLoop();

	}

	private static void bark() {
		String dogName = "Boo";
		System.out.println("The dog name " + dogName + " bark");
	}

	private static void changeType() {
		float f1 = 2.2f;
		int j = (int) f1;
		float f2 = (float) j;
		double d1 = 3.3;
		float f3 = (float) d1;
		char ch = 'r';
		int k = (int) ch;
		System.out.println("int = " + j + " float: " + f2 + " float: " + f3 + " int: " + k);
	}

	private static void ifElse() {
		int x = 1;
		boolean isHandSome = true;

		if (x >= 80 || isHandSome == true) {
			System.out.println("Good");
		} else if (x >= 50) {
			System.out.println("Normal");
		} else {
			System.out.println("Fail");
		}

	}

	private static void switchCase() {
		int value = 80;
		switch (value) {
		case 80:
			System.out.println("A");
			break;
		case 70:
			System.out.println("B");
			break;
		case 60:
			System.out.println("C");
			break;
		case 50:
			System.out.println("D");
			break;
		default:
			System.out.println("E");

		}
	}
	
	private static void whileLoop() {
		int i=10,sum=0;
		while(i>0) {
			System.out.println(i--);
			sum+=i;
					}
		System.out.println(sum);
		int hundred = 100;
		while(hundred>=1) {
			if(hundred%12==0)
			System.out.println(hundred);
		hundred--;
		}
	}
}

//comment
/* comment */

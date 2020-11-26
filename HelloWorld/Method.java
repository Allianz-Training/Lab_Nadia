package com.Allianz.HelloWorld;

public class Method {
	public static void main(String[] args) {
		char[] myChar = { 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' };
		String myWord = new String(myChar);
		System.out.println(myWord);

		String String1 = "You and Me";
		String String2 = " you and me ";

		System.out.println(String1.equals(String2));
		System.out.println(String1.contains("Me"));
		System.out.println(String2.length());
		System.out.println(String1.substring(4, 10));
		System.out.println(String2.trim());
		System.out.println(String1.toUpperCase());
		System.out.println(String2.trim().toUpperCase());

		int[][] twoD_Array = { { 1, 2, 3 }, { 4, 5, 6, 7 }, { 8, 9 } };
		int sum = 0;
		for (int row = 0; row < twoD_Array.length; row++) {
			for (int element = 0; element < twoD_Array[row].length; element++) {
				System.out.println(twoD_Array[row][element]);
				if (element == twoD_Array[row].length - 1) {
					sum += twoD_Array[row][element];
				}
			}
		}
		System.out.println(sum);
		
		int[] array = {8,6,4,5};
		for(int a : array) {
			System.out.print(a);
		}
	}

}

package com.Allianz.HelloWorld;

public class Homework231120 {
	public static void main(String[] args) {
		System.out.println("\n--------(1.1)---------");
		draw1(4);
		System.out.println("\n--------(1.2)---------");
		draw2(4);
		System.out.println("--------(1.3)---------");
		draw3(4);
		System.out.println("--------(1.4)---------");
		draw4(4);
		System.out.println("--------(1.5)---------");
		draw5(4);
		System.out.println("--------(1.6)---------");
		draw6(4);
		System.out.println("--------(1.7)---------");
		draw7(4);
		System.out.println("--------(1.8)---------");
		draw8(4);
		System.out.println("--------(1.8)---------");
		String[][] table = { { "1", "2", "3" }, { "4", "5", "6" }, { "7", "8", "9" } };
		multiplyTable(table);
		System.out.println("--------(3.1)---------");
		draw9(4);
		System.out.println("--------(3.2)---------");
		draw10(4);
		System.out.println("--------(3.3)---------");
		draw11(4);
		System.out.println("--------(3.4)---------");
		draw12(4);
		System.out.println("--------(3.5)---------");
		draw13(4);
		System.out.println("--------(3.6)---------");
		draw14(4);
		System.out.println("--------(3.7)---------");
		draw15(4);
		System.out.println("--------(3.8)---------");
		draw16(4);
		System.out.println("--------(3.9)---------");
		draw17(4);
	}

	public static void draw1(int n) {
		for (int i = 1; i <= n; i++) {
			System.out.print("*");
		}
	}

	public static void draw2(int n) {
		for (int i = 1; i <= n; i++) {

			for (int j = 1; j <= n; j++) {
				System.out.print("*");
			}

			System.out.print("\n");
		}
	}

	public static void draw3(int n) {
		for (int i = 1; i <= n; i++) {

			for (int j = 1; j <= n; j++) {
				System.out.print(j);
			}

			System.out.print("\n");
		}
	}

	public static void draw4(int n) {
		for (int i = 1; i <= n; i++) {

			for (int j = n; j >= 1; j--) {
				System.out.print(j);
			}

			System.out.print("\n");
		}
	}

	public static void draw5(int n) {
		for (int i = 1; i <= n; i++) {

			for (int j = 1; j <= n; j++) {
				System.out.print(i);
			}

			System.out.print("\n");
		}
	}

	public static void draw6(int n) {
		for (int i = n; i >= 1; i--) {

			for (int j = 1; j <= n; j++) {
				System.out.print(i);
			}

			System.out.print("\n");
		}
	}

	public static void draw7(int n) {
		for (int i = 0; i < n; i++) {

			for (int j = 1; j <= n; j++) {
				System.out.print(i * 4 + j);
			}
			System.out.print("\n");
		}
	}

	public static void draw8(int n) {
		for (int i = n - 1; i >= 0; i--) {

			for (int j = n; j > 0; j--) {
				System.out.print(i * 4 + j);
			}
			System.out.print("\n");
		}
	}
	public static void multiplyTable(String[][] table) {
		for (String[] row : table) {
			String out = "";
			for (int i = 0; i < row.length; i++) {
				if (i != row.length - 1) {
					out += Integer.parseInt(row[i]) * 2 + ", ";
				} else {
					out += Integer.parseInt(row[i]) * 2;

				}
			}
			System.out.println(out);
		}
	}
	public static void draw9(int n) {
		for (int i = 0; i < n; i++) {
			System.out.println(i * 2);
		}
	}

	public static void draw10(int n) {
		for (int i = 1; i <= n; i++) {
			System.out.println(i * 2);
		}
	}

	public static void draw11(int n) {
		for (int i = 1; i <= n; i++) {
			for (int j = 1; j <= n; j++) {
				System.out.print(j * i);
			}
			System.out.println("");
		}
	}

	public static void draw12(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (i == j) {
					System.out.print("-");
				} else {
					System.out.print("*");
				}
			}
			System.out.println("");
		}
	}

	public static void draw13(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = n - 1; j >= 0; j--) {
				if (i == j) {
					System.out.print("-");
				} else {
					System.out.print("*");
				}
			}
			System.out.println("");
		}
	}

	public static void draw14(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (j > i) {
					System.out.print("-");
				} else {
					System.out.print("*");
				}
			}
			System.out.println("");
		}
	}

	public static void draw15(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = n - 1; j >= 0; j--) {
				if (i > j) {
					System.out.print("-");
				} else {
					System.out.print("*");
				}
			}
			System.out.println("");
		}
	}

	public static void draw16(int n) {
		for (int i = 0; i < n - 1; i++) {
			for (int j = 0; j < n; j++) {
				if (j > i) {
					System.out.print("-");
				} else {
					System.out.print("*");
				}
			}
			System.out.println("");
		}
		for (int i = 0; i < n; i++) {
			for (int j = n - 1; j >= 0; j--) {
				if (i > j) {
					System.out.print("-");
				} else {
					System.out.print("*");
				}
			}
			System.out.println("");
		}
	}

	public static void draw17(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (j > i) {
					System.out.print("-");
				} else {
					System.out.print(i + 1);
				}
			}
			System.out.println("");
		}
		for (int i = n - 1; i > 0; i--) {
			for (int j = 0; j < n; j++) {
				if (j > i - 1) {
					System.out.print("-");
				} else {
					System.out.print(i);
				}
			}
			System.out.println("");
		}
	}

}

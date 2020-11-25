package com.Allianz.Homework251120;

public class MovableCircle implements Movable {
	private int radius;
	private MovablePoint center;
	
	public MovableCircle(int x, int y, int xSpeed, int ySpeed, int radius) {
		this.center = new MovablePoint(x, y, xSpeed, ySpeed);
		this.radius = radius;
	}
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
	}
	
	public void moveUp() {
		center.moveUp();
	}

	public void moveDown() {
		center.moveDown();
	}

	public void moveLeft() {
		center.moveLeft();
	}

	public void moveRight() {
		center.moveRight();
	}

	public static void main(String[] args) {
		MovableCircle mc = new MovableCircle(7, 10, 5, 9, 100);
		System.out.println(mc.center.x + " " + mc.center.y);
		
		mc.moveUp();
		System.out.println(mc.center.x + " " + mc.center.y);
	}
}
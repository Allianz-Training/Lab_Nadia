package com.Allianz.Homework251120;

public class MovablePoint implements Movable {
	public int x;
	public int y;
	public int xSpeed;
	public int ySpeed;
	
	public MovablePoint(int x, int y, int xSpeed, int ySpeed) {
		// TODO Auto-generated constructor stub
		this.x=x;
		this.y=y;
		this.xSpeed=xSpeed;
		this.ySpeed=ySpeed;
	}
	
	@Override
	public String toString() {
		return "MovablePoint [x=" + x + ", y=" + y + ", xSpeed=" + xSpeed + ", ySpeed=" + ySpeed + "]";
	}

	public void moveUp() {
		this.y = y + ySpeed;
	}

	public void moveDown() {
		this.y = y - ySpeed;
	}

	public void moveLeft() {
		this.x = x - xSpeed;
	}

	public void moveRight() {
		this.x = x + xSpeed;		
	}
}

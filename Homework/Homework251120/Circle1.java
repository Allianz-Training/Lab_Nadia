package com.Allianz.Homework251120;

public class Circle1 {
  private double radius = 1.0;
  private String color = "red";

  Circle() {

  }

  Circle(double radius) {
    this.radius = radius;
  }

  public double getRadius() {
    return radius;
  }

  public double getArea() {
    return Math.PI * radius * radius;
  }
}

/* eslint-disable max-classes-per-file */
// Define a Person class with encapsulation
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Encapsulated method to get the person's details
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Create a Student class that inherits from Person
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call the constructor of the parent class
    this.grade = grade;
  }

  // Override the getDetails method to include grade
  getDetails() {
    return `${super.getDetails()}, Grade: ${this.grade}`;
  }
}

// Create instances of Person and Student
const person1 = new Person('Alice', 30);
const student1 = new Student('Bob', 18, 'A');

// Demonstrate polymorphism
const people = [person1, student1];
people.forEach((person) => {
  console.log(person.getDetails());
});

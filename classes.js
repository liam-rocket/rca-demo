// class House {
//   constructor(color) {
//     this.noOfDoors = 4;
//     this.noOfWindows = 8;
//     this.width = '100m';
//     this.height = '20m';
//     this.color = color;
//   }

//   getColor() {
//     return this.color;
//   }
// }

const student = {
  name: 'Liam',
  age: 28,
};

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getNationality(country) {
    return `${this.name} is from ${country}`;
  }
}

const student1 = new Student('Zach', 18);
const student2 = new Student('Kai', 25);

console.log('student: ', student, typeof student);
console.log('student1: ', student1, typeof student1);
console.log('student2: ', student2, typeof student2);

const student1Name = student1.getName();
const student1Nationality = student1.getNationality('Singapore');

console.log('student1Name: ', student1Name);
console.log('student1Nationality: ', student1Nationality);

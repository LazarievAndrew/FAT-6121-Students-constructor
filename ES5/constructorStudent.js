import {age} from "./getStudentAge.js";
import {present} from "./isPresent.js";
import {absent} from "./isAbsent.js";
import {summary} from "./isSummary.js";

export default function Student(name, surname, yearOfBirthday, marks) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirthday = yearOfBirthday;
    this.attendance = new Array(25);
    this.marks = marks;
}

Student.prototype.age = age;
Student.prototype.present = present;
Student.prototype.absent = absent;
Student.prototype.summary = summary;

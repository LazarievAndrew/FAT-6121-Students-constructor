
import Student from "./ES5/constructorStudent.js";
import ArrayConstructorES5 from "./ES5/arrayConstructorES5.js";


Array.prototype.attendanceES5 = ArrayConstructorES5.prototype.attendance;
Array.prototype.performanceES5 = ArrayConstructorES5.prototype.performance;

var sidorsMarks = [95, 89, 96, 98, 94];
var student1 = new Student('Sidor', "Sidorov", 1999, sidorsMarks);

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();

console.log(student1);
console.log('Студенту ' + student1.name + ' ' + student1.surname + ' ' + student1.age() + ' лет.');
student1.summary();

var ivansMarks = [95, 89, 99, 96];
var student2 = new Student('Ivan', 'Ivanov', 2004, ivansMarks);

student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.absent();
student2.absent();

console.log(student2);
console.log('Студенту ' + student2.name + ' ' + student2.surname + ' ' + student2.age() + ' лет.');
student2.summary();

var denisesMarks = [86, 72, 84, 63, 90, 99, 96];
var student3 = new Student('Denis', 'Denisov', 2002, denisesMarks);

student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();

console.log(student3);
console.log('Студенту ' + student3.name + ' ' + student3.surname + ' ' + student3.age() + ' лет.');
student3.summary();

var fedorsMarks = [36, 72, 84, 63, 45, 68, 76];
var student4 = new Student('Fedor', 'Fedorov', 1997, fedorsMarks);

student4.present();
student4.present();
student4.present();
student4.present();
student4.present();
student4.absent();
student4.absent();
student4.absent();
student4.absent();
student4.absent();
student4.present();
student4.present();
student4.present();
student4.present();
student4.present();
student4.absent();
student4.absent();
student4.absent();
student4.absent();
student4.absent();
student4.absent();
student4.absent();
student4.absent();
student4.absent();
student4.absent();

console.log(student4);
console.log('Студенту ' + student4.name + ' ' + student4.surname + ' ' + student4.age() + ' лет.');
student4.summary();

var group = new ArrayConstructorES5(student1, student2, student3, student4);

console.log(group);

console.log('-----Среднее посещаемость занятий всех студентов-----');
console.log('Средняя посещаемость группы за одно занятие - ' + Math.round(group.attendanceES5() * 100) / 100 + ' или' +
    ' ' + Math.round(group.attendanceES5() * 100) + '%');

console.log('-----Среднее посещаемость занятий студента-----');
console.log(group.attendanceES5('Sidorov'));
console.log(group.attendanceES5('Ivanov'));
console.log(group.attendanceES5('Denisov'));
console.log(group.attendanceES5('Fedorov'));
console.log(group.attendanceES5('Pupkin'));


console.log('-----Средняя оценка всех студентов группы-----');
console.log('Средняя оценка группы - ' + (Math.round(group.performanceES5() * 100) / 100));

console.log('-----Средняя оценка студента-----');
console.log(group.performanceES5('Sidorov'));
console.log(group.performanceES5('Ivanov'));
console.log(group.performanceES5('Denisov'));
console.log(group.performanceES5('Fedorov'));
console.log(group.performanceES5('Pupkin'));



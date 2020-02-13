export default class Student {
    constructor(name, surname, yearOfBirthday, marks) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirthday = yearOfBirthday;
        this.attendance = new Array(25);
        this.marks = marks
    }

    age() {
        return (new Date().getFullYear()) - this.yearOfBirthday;
    }

    present() {
        for (let i = 0; i < 25; i++){   // на for сделал, чтоб отсечь более 25 элементов и убрать лишние проверки
            if (this.attendance[i] === undefined){
                this.attendance[i] = true;
                break;
            }
        }
    }

    absent() {
        for (let i = 0; i < 25; i++){   // на for сделал, чтоб отсечь более 25 элементов и убрать лишние проверки
            if (this.attendance[i] === undefined){
                this.attendance[i] = false;
                break;
            }
        }
    }

    summary () {
        let marks = this.marks.slice();
        let attendance = this.attendance.slice();
        let averageMark = (marks.reduce((a,b) => {
            return a + b;
        }, 0)) / marks.length;
        let averageAttendance = function () {
            let counter = 0;
            let _attendance = attendance.filter((item) => {
                if (item !== undefined) {
                    if(item) {
                        counter++;
                    }
                    return counter;
                }
            });
            return counter / _attendance.length;
        };
        if (averageMark > 90 && averageAttendance() > 0.9) {
            console.log(`Ути какой молодчинка!`);
        } else if ((averageMark < 90 && averageAttendance() < 0.9)) {
            console.log(`Редиска!`);
        } else {
            console.log(`Норм, но можно лучше`);
        }
    }
}

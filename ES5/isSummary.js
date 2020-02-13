export var summary = function () {

    var marks = this.marks.slice();
    var attendance = this.attendance.slice();

    var averageMark = (marks.reduce((a,b) => {
        return a + b;
    }, 0)) / marks.length;

    var averageAttendance = function () {
        var counter = 0;
        var _attendance = attendance.filter((item) => {
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
        console.log("Ути какой молодчинка!");
    } else if ((averageMark < 90 && averageAttendance() < 0.9)) {
        console.log("Редиска!");
    } else {
        console.log("Норм, но можно лучше");
    }
};

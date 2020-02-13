export default function attendance(arg) {
    var list = this.slice();
    var isObject = true;

    list.forEach( item => {
        if (typeof item != 'object') {
            isObject = false;
        }
    });

    if (isObject) {

        var visited = list.map((item) => {
            var sum = 0;
            var _item = item.attendance.filter((visit) => {
                if (visit) {
                    sum++
                }
                return sum;
            });
            item.averageVisited = sum / _item.length;
            return item.averageVisited;
        });

        var averageVisit = visited.filter((item) => {
            if (item) return item;
        });

        list.sort((a, b) => {
            return b.averageVisited - a.averageVisited;
        });

        if (arg) {
            var rating = 'Такого студента нет в группе!';
            list.forEach((item) => {
                if (arg === item.surname) {
                    rating = 'Студент ${item.surname} находится на ' + (list.indexOf(item) + 1) + ' месте по посещаемости';
                    // rating = list.indexOf(item) + 1;   // вывод только места в рейтинге
                }
            });
            return rating;
        }

        return (averageVisit.reduce((a, b) => {
            return a + b;
        }, 0)) / averageVisit.length;

    }
}

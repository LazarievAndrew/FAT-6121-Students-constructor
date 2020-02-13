
export  default function attendance(arg){
    const list = this.slice();
    let isObject = true;

    list.forEach( item => {
        if (typeof item != 'object') {
            isObject = false;
        }
    });

    if (isObject) {

        let visited = list.map((item) => {
            let sum = 0;
            const _item = item.attendance.filter((visit) => {
                if (visit) {
                    sum++
                }
                return sum;
            });
            item.averageVisited = sum / _item.length;
            return item.averageVisited;
        });

        let averageVisit = visited.filter((item) => {
            if (item) return item;
        });

        list.sort((a, b) => {
            return b.averageVisited - a.averageVisited;
        });

        if (arg) {
            let rating = 'Такого студента в группе!';
            list.forEach((item) => {
                if (arg === item.surname) {
                    rating = `Студент ${item.surname} находится на ${
                        list.indexOf(item) + 1} месте по посещаемости`;
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

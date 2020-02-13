export default function performance(arg) {
    var list = this.slice();
    var isObject = true;

    list.forEach( item => {
        if (typeof item != 'object') {
            isObject = false;
        }
    });

    if (isObject) {

        var marked = list.map(item => {
            var sum = 0;
            var _item = item.marks.filter(mark => {
                sum += mark;
                return sum;
            });
            item.averageMark = sum / _item.length;
            return item.averageMark;
        });

        var averageMarks = marked.filter(item => {
            if (item) return item;
        });

        list.sort((a, b) => {
            return b.averageMark - a.averageMark;
        });

        if (arg) {
            var rating = 'Такого студента нет в группе!';
            list.forEach((item) => {
                if (arg === item.surname) {
                    rating = 'Студент ' + item.surname + ' находится на ' + (list.indexOf(item) + 1) + ' месте по' +
                        ' среднему уровню оценок';
                    // rating = list.indexOf(item) + 1;   // вывод только места в рейтинге
                }
            });
            return rating;
        }

        return (averageMarks.reduce((a, b) => {
            return a + b;
        }, 0)) / averageMarks.length;

    }
}

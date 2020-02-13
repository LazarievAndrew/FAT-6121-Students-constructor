
    // Вам нужно сделать конструктор сущности Студент.
    // У Студента есть имя, фамилия, год рождения — это свойства.
    // Есть массив с оценками, это тоже свойство.
    // И есть возможность получить возраст студента и его средний бал — это методы.
    // Еще у всех Студентов есть по массиву одинаковой длины, в нем 25 элементов,
    // изначально он не заполнен, но на 25 элементов. Это массив в котором отмечается посещаемость,
    // каждый раз когда мы вызываем метод .present() на очередное пустое место в массив записывается true,
    // когда вызываем .absent() — записывается false.
    // Предусмотрите какую нибудь защиту от того чтоб в массиве посещаемости не могло быть более 25 записей.
    // Массив это свойство, present и absent — методы.
    // Ну и последний метод: .summary(), он проверяет среднюю оценку
    // и среднее посещение(количествоПосещений/количествоЗанятий),
    // и если средняя оценка больше 90 а среднее посещение больше 0.9,
    // то метод summary, возвращает строку "Ути какой молодчинка!",
    // если одно из этих значений меньше, то — "Норм, но можно лучше", если оба ниже — "Редиска!".
    // Ну и не забудьте после того как напишите замечательный конструктор,
    // создать пару экземпляров(конкретных студентов) и подергать методы.
    // Нужно сделать в двух версиях: es5 и es2015


    import Student from "./ES6/classStudent.js";
    import arrayConstructor from "./ES6/arrayConstructor.js";


    const vasiasMarks = [97, 98, 90, 85, 99, 96]

    let student11 = new Student('Vasia', 'Vasiliev', 2003, vasiasMarks)

    console.log(student11)

    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.present();
    student11.absent();
    student11.present();
    student11.present();

    console.log(student11.age());
    student11.summary();

    const petiasMarks = [97, 97, 96, 83, 99, 96]

    let student22 = new Student('Petia', 'Petrov', 2001, petiasMarks)

    console.log(student22)

    student22.present();
    student22.absent();
    student22.present();
    student22.present();
    student22.present();
    student22.present();
    student22.present();
    student22.present();
    student22.absent();
    student22.absent();
    student22.absent();
    student22.present();
    student22.present();
    student22.present();
    student22.present();
    student22.present();
    student22.absent();
    student22.absent();
    student22.present();
    student22.present();
    student22.present();
    student22.present();
    student22.present();
    student22.present();
    student22.present();
    student22.present();
    student22.present();
    student22.present();
    student22.present();
    student22.present();
    student22.absent();
    student22.absent();
    student22.absent();
    student22.absent();


    console.log(student22.age());
    student22.summary();

    const sergeysMarks = [97, 74, 98, 90, 45, 85, 56, 99, 96];

    let student33 = new Student('Sergey', 'Sergeev', 2004, sergeysMarks);

    console.log(student33);

    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();
    student33.present();

    console.log(student33.age());
    student33.summary();

    const igorsMarks = [97, 74, 45, 85, 56, 96, 92, 86];

    let student44 = new Student('Igor', 'Igorev', 2002, igorsMarks);

    console.log(student44);

    student44.present();
    student44.present();
    student44.present();
    student44.present();
    student44.present();
    student44.absent();
    student44.absent();
    student44.absent();
    student44.absent();
    student44.absent();
    student44.present();
    student44.present();
    student44.present();
    student44.present();
    student44.present();
    student44.absent();
    student44.absent();
    student44.absent();
    student44.absent();
    student44.absent();
    student44.absent();
    student44.absent();
    student44.absent();
    student44.absent();
    student44.absent();

    console.log(student44.age());
    student44.summary();

    const group2 = new arrayConstructor(student11, student22, student33, student44);
    console.log(group2);

    Array.prototype.attendance = arrayConstructor.attendance;

    console.log('-----Среднее посещаемость занятий студента-----');
    console.log(group2.attendance('Vasiliev'));
    console.log(group2.attendance('Petrov'));
    console.log(group2.attendance('Sergeev'));
    console.log(group2.attendance('Igorev'));
    console.log(group2.attendance('Pupkin'));
    group2.attendance('Vasiliev')

    console.log('-----Среднее посещаемость занятий всех студентов-----');
    console.log(`Средняя посещаемость группы за одно занятие - ${
        Math.round(group2.attendance() * 100) / 100 } или ${Math.round(group2.attendance() * 100)}%`);

    Array.prototype.performance = arrayConstructor.performance;

    console.log('-----Средняя оценка студента-----');
    console.log(group2.performance('Vasiliev'));
    console.log(group2.performance('Petrov'));
    console.log(group2.performance('Sergeev'));
    console.log(group2.performance('Igorev'));

    console.log('-----Средняя оценка всех студентов группы-----');
    console.log(`Средняя оценка группы - ${Math.round(group2.performance() * 100) / 100}`);



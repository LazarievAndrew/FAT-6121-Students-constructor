
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

    let student1 = new Student('Vasia', 'Vasiliev', 2003, vasiasMarks)

    console.log(student1)

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

    console.log(student1.age());
    student1.summary();

    const petiasMarks = [97, 97, 96, 83, 99, 96]

    let student2 = new Student('Petia', 'Petrov', 2001, petiasMarks)

    console.log(student2)

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


    console.log(student2.age());
    student2.summary();

    const sergeysMarks = [97, 74, 98, 90, 45, 85, 56, 99, 96];

    let student3 = new Student('Sergey', 'Sergeev', 2004, sergeysMarks);

    console.log(student3);

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

    console.log(student3.age());
    student3.summary();

    const igorsMarks = [97, 74, 45, 85, 56, 96, 92, 86];

    let student4 = new Student('Igor', 'Igorev', 2002, igorsMarks);

    console.log(student4);

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

    console.log(student4.age());
    student4.summary();

    const group = new arrayConstructor(student1, student2, student3, student4);
    console.log(group);

    Array.prototype.attendance = arrayConstructor.attendance;

    console.log('-----Среднее посещаемость занятий студента-----');
    console.log(group.attendance('Vasiliev'));
    console.log(group.attendance('Petrov'));
    console.log(group.attendance('Sergeev'));
    console.log(group.attendance('Igorev'));
    console.log(group.attendance('Pupkin'));
    group.attendance('Vasiliev')

    console.log('-----Среднее посещаемость занятий всех студентов-----');
    console.log(`Средняя посещаемость группы за одно занятие - ${
        Math.round(group.attendance() * 100) / 100 } или ${Math.round(group.attendance() * 100)}%`);

    Array.prototype.performance = arrayConstructor.performance;

    console.log('-----Средняя оценка студента-----');
    console.log(group.performance('Vasiliev'));
    console.log(group.performance('Petrov'));
    console.log(group.performance('Sergeev'));
    console.log(group.performance('Igorev'));

    console.log('-----Средняя оценка всех студентов группы-----');
    console.log(`Средняя оценка группы - ${Math.round(group.performance() * 100) / 100}`);



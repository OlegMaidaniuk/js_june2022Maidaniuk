// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// //
// function User(id, name, age, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     console.log(this);
// }
//
// let array = [];
//
// let user = new User(3, 'Max', 11, 'Fax', 'fdd@bfb.xf', +3333333333);
// let user7 = new User(3, 'Max', 47, 'Fax', 'fdd@bfb.xf', +3333333333);
// let user8 = new User(3, 'Max', 29, 'Fax', 'fdd@bfb.xf', +3333333333);
// let user9 = new User(3, 'Max', 38, 'Fax', 'fdd@bfb.xf', +3333333333)
// let user1 = new User(3, 'Max', 21, 'Fax', 'fdd@bfb.xf', +3333333333);
// let user2 = new User(3, 'Max', 25, 'Fax', 'fdd@bfb.xf', +3333333333);
// let user3 = new User(3, 'Max', 27, 'Fax', 'fdd@bfb.xf', +3333333333);
// let user4 = new User(3, 'Max', 21, 'Fax', 'fdd@bfb.xf', +3333333333);
// let user5 = new User(3, 'Max', 26, 'Fax', 'fdd@bfb.xf', +3333333333);
// let user6 = new User(3, 'Max', 58, 'Fax', 'fdd@bfb.xf', +3333333333);
// array.push(user2, user, user1, user3, user4, user5, user6, user7, user8, user9);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// // залишивши тільки об'єкти з парними id (filter)
// let filter1 = array.filter(value => value.id % 2 === 0);
// console.log(filter1);
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sort = array.sort((a, b) => a.id - b.id);
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів )



// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).
// // Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class User {
//     constructor(id, name, age, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//         this.surnameurname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let array = [];
//
// let user = new User(3, 'Max', 11, 'Fax', 'fdd@bfb.xf', +3333333333, [1,8]);
// let user7 = new User(3, 'Max', 47, 'Fax', 'fdd@bfb.xf', +3333333333,[1, 3]);
// let user8 = new User(3, 'Max', 29, 'Fax', 'fdd@bfb.xf', +3333333333, [3]);
// let user9 = new User(3, 'Max', 38, 'Fax', 'fdd@bfb.xf', +3333333333, [1, 2, 3, 8])
// let user1 = new User(3, 'Max', 21, 'Fax', 'fdd@bfb.xf', +3333333333, [1, 2, 3, 7, 9]);
// let user2 = new User(3, 'Max', 25, 'Fax', 'fdd@bfb.xf', +3333333333, [3, 5, 9]);
// let user3 = new User(3, 'Max', 27, 'Fax', 'fdd@bfb.xf', +3333333333,[1, 2, 3, 2, 9]);
// let user4 = new User(3, 'Max', 21, 'Fax', 'fdd@bfb.xf', +3333333333, [1, 2, 3, 4, 9]);
// let user5 = new User(3, 'Max', 26, 'Fax', 'fdd@bfb.xf', +3333333333, [1, 9]);
// let user6 = new User(3, 'Max', 58, 'Fax', 'fdd@bfb.xf', +3333333333, [2, 3, 9]);
// array.push(user2, user, user1, user3, user4, user5, user6, user7, user8, user9);
//
// let sort1 = array.sort((a, b) => a.order.length-b.order.length);
// console.log(sort1);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car
// function Car(model,producer,year,maxSpeed,engine) {
//     this.model = model;
//     this.produser = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         for (const item in this) {
//             if (typeof this [item] !== "function") {
//                 console.log(`${item}--${this[item]}`);
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed+=newSpeed;
//     }
//     this.addDriver=function (driver) {
//         this.driver=driver;
//     }
// }
// let car = new Car('Skoda','Czech Republic',2008,195,1.6);
// console.log(car);
//
// car.info();
// car.increaseMaxSpeed(78)
// console.log(car);
//
// car.addDriver({name:'Miha', age:44});
// console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, producer, year, maxSpeed, engine) {
//         this.model = model;
//         this.produser = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//
//     this.info=function (){
//         for (const item in this) {
//             if (typeof this[item] !== 'function'){
//                 console.log(`${item} -- ${this[item]}`);
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed+=newSpeed;//this.maxSpeed=this.maxSpeed+newSpeed;
//     }
//     this.addDriver = function (driver) {
//         this.driver=driver;
//     }
// }
// let car = new Car('Skoda','Czech Republic',2008,195,1.6);
// console.log(car);
// car.drive();
//
// let objDriver = {
//     name:'Pedro',
//     age:55
// }
//
// car.info();
// car.increaseMaxSpeed(96)
// console.log(car);
// car.addDriver(objDriver);
// console.log(car);


//
//  -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, sizeFoot) {
        this.name = name;
        this.age = age;
        this.sizeFoot = sizeFoot;
    }
}

let cinderella1 = new Cinderella('Hanna',17,35);
let cinderella2 = new Cinderella('Hanna',17,36);
let cinderella3 = new Cinderella('Hanna',17,37);
let cinderella4 = new Cinderella('Hanna',17,38);
let cinderella5 = new Cinderella('Hanna',17,39);
let cinderella6 = new Cinderella('Hanna',17,40);
let cinderella7 = new Cinderella('Hanna',17,41);
let cinderella8 = new Cinderella('Hanna',17,42);
let cinderella9 = new Cinderella('Hanna',17,43);
let cinderella0 = new Cinderella('Hanna',17,34);

let arraySi =  [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7,
    cinderella8, cinderella9, cinderella0]
class Prince extends Cinderella{
    constructor(name,age,findsizeFoot) {
        super(name, age);
        this.findsizeFoot = findsizeFoot;
    }
}
let prince = new Prince('GupaloVasyly', 41, 42);
let find = (array,prince) => {
    for (const item of array) {
        if(prince.findsizeFoot===item.sizeFoot){
            return `My Cinderella is ${item.name}`
        }
    }
}
console.log(find(arraySi, prince));


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// Footer
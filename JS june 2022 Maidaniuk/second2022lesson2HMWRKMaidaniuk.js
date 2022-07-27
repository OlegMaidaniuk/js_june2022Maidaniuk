// - Створити масив, наповнити його 10 елементами будь-якого типу,
//     вивести кожен елемент в консоль
//
let books = ["tarzan", "bibliya", "math 6", "kobzar", "golovolomky",
    "maugli", "Вантажівки", "graf_drakula", "gupalo Vasil", "fozzi"];
console.log(books);
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);
console.log(books[3]);
console.log(books[4]);
console.log(books[5]);
console.log(books[6]);
console.log(books[7]);
console.log(books[8]);
console.log(books[9]);


// - Створити 3 об'єкти які описують книги. ' +
// 'Поля об'єкту : title ,pageCount, genre.
let book11 = {
    title: "Romeo",
    genre: "Roman",
    pageCount: 268
};
console.log(book11);
let book21 = {
    title: "dead",
    genre: "Fantasy",
    pageCount: 245
};
console.log(book21);
let book31 = {
    title: "!Z!ombi land",
    genre: "Horror",
    pageCount: 145
};
console.log(book31);

// - Створити 3 об'єкти які описують книги. Поля об'єкту :
//     title ,pageCount, genre, authors.
//     Поле "автори" - масив. Кожен автор має поля name,age
let book12 = {
    title: "Romeo",
    genre: "Roman",
    pageCount: 268,
    auhtors: [
        {
            name:
                "Vilyam_Sheckspir",
            age: 178
        }]
};
console.log(book12);

let book22 = {
    title: "Mafiozi",
    genre: "Fantasy",
    pageCount: 245,
    auhtors: [
        {
            name:
                " Mihail Petrovich",
            age: 78
        }]
};
console.log(book22);

let book32 = {
    title: "!Z!ombi land",
    genre: "Horror",
    pageCount: 145,
    authors: [
        {
            name: "Antios",
            age: 45
        }
    ]
};


// - Створити масив з 10 об'єктами які описують сутніть "користувач".' +
// ' Поля: name, username,password. Вивести в консоль пароль кожного користувача

// в останньому завданні, там мав бути ОДИН масив
// в якому 10 обєктів. і тоді в консолі
// доступатись до індексу елемента   масиву і його поля password.

let users = [
    {
        name: 'Taras',
        username: 'Minecrafter',
        password: 12471981,
    },
    {
        name: 'Yarik',
        username: 'BrawlStarser',
        password: 12471982,
    },
    {
        name: 'Danilo',
        username: 'Chelik',
        password: 12471983,
    },
    {
        name: 'Miroslav',
        username: 'Farich',
        password: 1247194,
    },
    {
        name: 'Olya',
        username: 'Programist',
        password: 12471985,
    },
    {
        name: 'Valintina',
        username: 'Barman',
        password: 12471986,
    },
    {
        name: 'Mikola',
        username: 'Cser',
        password: 12471987,
    },
    {
        name: 'Vitaliy',
        username: 'Kolodka',
        password: 12471988,
    },
    {
        name: 'Roma',
        username: 'Tumbochka',
        password: 12471989,
    },
    {
        name: 'Illuha',
        username: 'Vodichka',
        password: 12471910
    }
]
console.log(users[0].password);


console.table(users, ['password']);
console.log(users.password)

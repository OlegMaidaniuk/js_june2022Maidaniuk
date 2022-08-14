// - Знайти та вивести довижину наступних стрінгових значень

let strfirst = 'hello world';
console.log(strfirst.length);

let strsecond = 'lorem ipsum';
console.log(strsecond.length);

let strthreeth = 'js is cool';
console.log(strthreeth.length);
console.log(strfirst.length, strsecond.length, strthreeth.length);
// - Перевести до великого регістру наступні стрінгові значення

let str0 = 'hello world';
console.log(str0.toUpperCase());

let str1 = 'lorem ipsum';
console.log(str1.toUpperCase());

let str2 = 'javascript is cool';
console.log(str2.toUpperCase());
console.log(strfirst.toUpperCase(), strsecond.toUpperCase(), strthreeth.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення

let str3 = 'HELLO WORLD';
console.log(str3.toLowerCase());

let str4 = 'LOREM IPSUM';
console.log(str4.toLowerCase());

let str5 = 'JAVASCRIPT IS COOL';
console.log(str5.toLowerCase());
console.log(strfirst.toLowerCase(), strsecond.toLowerCase(), strthreeth.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str6 = ' dirty string   ';
let str61 = str6.trimStart();
let str62 = str6.trimEnd();
console.log(str6.trim());
console.log(str61);
console.log(str62);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str7 = 'Ревуть воли як ясла повні';
let stringToar = str7.split(' ')
console.log(stringToar);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let numericArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(typeof numericArray, Array.isArray(numericArray), numericArray.toString());
console.log(typeof numericArray);
let strnumArr = numericArray.map(String);
console.log(strnumArr);
let stringNumArr = numericArray.map(value => value.toString());
let strinNumArr = numericArray.map(value => value + '');
let sNumARR = numericArray.map(value => String(value));
console.log(stringNumArr);
console.log(strinNumArr);
console.log(sNumARR);

// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//
//    // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


let nums = [11, 21, 3];
nums.sort((num1, num2) => num1 - num2);
console.log(nums)
nums.sort((num2, num1) => num1 - num2);
console.log(nums)


// sortNums(nums,'ascending')

const sotrnum = (direction, arr) => {
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        arr.sort((b, a) => a - b);
    }
    return arr;

}

console.log(sotrnum('ascendsng', nums));
console.log(sotrnum('descendsng', nums));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort
((a, b) => b.monthDuration - a.monthDuration)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);

let fiilter = coursesAndDurationArray.filter(function (value) {
        return value.monthDuration > 5
    }
)
//
// описати колоду карт

let descofCards = [
    {
        cardSuit: null,
        value: 'Joker',
        color: 'black'
    },
    {
        cardSuit: null,
        value: 'Joker',
        color: 'red'
    },

    {
        cardSuit: 'hearts',
        value: 'King',
        color: 'red'
    },
    {
        cardSuit: 'diamonds',
        value: 'King',
        color: 'red'
    }, {
        cardSuit: 'clubs',
        value: 'King',
        color: 'black'
    }, {
        cardSuit: 'spades',
        value: 'King',
        color: 'black'
    },

    {
        cardSuit: 'hearts',
        value: 'queen',
        color: 'red'
    }, {
        cardSuit: 'diamonds',
        value: 'queen',
        color: 'red'
    }, {
        cardSuit: 'clubs',
        value: 'queen',
        color: 'black'
    }, {
        cardSuit: 'spades',
        value: 'queen',
        color: 'black'
    },

    {
        cardSuit: 'hearts',
        value: 'ace',
        color: 'red'
    }, {
        cardSuit: 'diamonds',
        value: 'ace',
        color: 'red'
    }, {
        cardSuit: 'clubs',
        value: 'ace',
        color: 'black'
    }, {
        cardSuit: 'spades',
        value: 'ace',
        color: 'black'
    },

    {
        cardSuit: 'hearts',
        value: 10,
        color: 'red'
    }, {
        cardSuit: 'diamonds',
        value: 10,
        color: 'red'
    }, {
        cardSuit: 'clubs',
        value: 10,
        color: 'black'
    }, {
        cardSuit: 'spades',
        value: 10,
        color: 'black'
    },

    {
        cardSuit: 'hearts',
        value: 9,
        color: 'red'
    }, {
        cardSuit: 'diamonds',
        value: 9,
        color: 'red'
    }, {
        cardSuit: 'clubs',
        value: 9,
        color: 'black'
    }, {
        cardSuit: 'spades',
        value: 9,
        color: 'black'
    },

    {
        cardSuit: 'hearts',
        value: 8,
        color: 'red'
    }, {
        cardSuit: 'diamonds',
        value: 8,
        color: 'red'
    }, {
        cardSuit: 'clubs',
        value: 8,
        color: 'black'
    }, {
        cardSuit: 'spades',
        value: 8,
        color: 'black'
    },

    {
        cardSuit: 'hearts',
        value: 7,
        color: 'red'
    }, {
        cardSuit: 'diamonds',
        value: 7,
        color: 'red'
    }, {
        cardSuit: 'clubs',
        value: 7,
        color: 'black'
    }, {
        cardSuit: 'spades',
        value: 7,
        color: 'black'
    },

    {
        cardSuit: 'hearts',
        value: 6,
        color: 'red'
    }, {
        cardSuit: 'diamonds',
        value: 6,
        color: 'red'
    }, {
        cardSuit: 'clubs',
        value: 6,
        color: 'black'
    }, {
        cardSuit: 'spades',
        value: 6,
        color: 'black'
    }
]
// - знайти піковий туз

let find = descofCards.find(value => value.cardSuit === 'spades' && value.value === 'ace');
console.log(find);
// - всі шістки
let filter1 = descofCards.filter(value => value.value === 6);
console.log(filter1);
// - всі червоні карти
let filter2 = descofCards.filter(value => value.color === 'red');
console.log(filter2);

// - всі буби
let filter3 = descofCards.filter(value => value.cardSuit === 'diamonds');
console.log(filter3);

// - всі трефи від 9 та більше

let filter4 = descofCards.filter(value => value.cardSuit === 'spade' && value.value > 8 ||
    value.value === 'Joker' && value.color === "black" || typeof value.value === 'string' && value.cardSuit === 'spade')

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу
// попакувати всі карти по "мастях" в об'єкт

let reduce = descofCards.reduce(
    (accum,
     card) => {
        if (card.cardSuit === 'spades') {
            accum.spades.push(card)
        } else if (card.cardSuit === 'diamonds') {
            accum.diamonds.push(card)
        } else if (card.cardSuit === 'hearts') {
            accum.hearts.push(card)
        } else if (card.cardSuit === 'clubs') {
            accum.clubs.push(card)
        } else {
            accum.Joker.push(card)
        }
        return accum;
    }, {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: [],
        Joker: []
    })
console.log(reduce);
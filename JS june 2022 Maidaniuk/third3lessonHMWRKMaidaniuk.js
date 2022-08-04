// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
//     інакше виведіть 'Невірно'.
//     Перевірте  скрипт првнює 1, 0, и a, що дорі-3

// let x1=+prompt();
// if (0 !== x1){
//     console.log("вірно");
// }
// else {
//     console.log("невірно");
// }


// let x = 123;
// let ab = 'вірно';
// let f = 'невірно';
// if (x !== 0) {
//     console.log(ab);
// } else {
//     console.log(f);
// }
//
//
// let y = 0;
// if (y !== 0) {
//     document.write('вірно');
// } else {
//     document.write("невірно");
// }


// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


// let time = false;    //+prompt(`wth time is it ?`);
// if (time >= 0 && time < 15) {
//     console.log(`перша чверть`)
// } else if (time >= 15 && time < 30) {
//     console.log(`друга чверть`)
// } else if (time >= 30 && time < 45) {
//     console.log(`третя чверть`)
// } else if (time >= 45 && time < 60) {
//     console.log(`четверта чверть`)
// } else {
//     console.log(`Ти шо з ґлузду з'їхав? Are you a drug addict?`)
// }


// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

//відгадай а яка тут декада в консолі,
// ти думаєш друга? чи може ні?
// let day = 10;
// if (day >= 1 && day <= 10) {
//     console.log(`decade 1`);
// } else if (day === true)
// // (day > 10 && day <= 20)
// {
//     console.log(`decade 2`);
// } else if (day > 20 && day <= 31) {
//     console.log(`decade 3`);
// } else {
//     console.log(`wtf man ?!`);
// }

//
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day = 10;
switch (day) {
//(+prompt("enter a day number")) {
    case 1:
        console.log(`I will write the first part of the site`);
        break;
    case 2:
        console.log(`I will write the second part of the site`);
        break;
    case 3:
        console.log(`I will write the third part of the site`);
        break;
    case 4:
        console.log(`I will write the fourth part of the site`);
        break;
    case 5:
        console.log(`I will write the final part of the site`);
        break;
    case 6:
        console.log(`I go to the pool`);

        if (day === 10) {
            document.write('ten')}

        break;
    default:
        console.log("go number!!!");
    }
        // break;
    // case 7:
    //     console.log(`I will stay at home and watch movies`);
    //     break;

    //     break;
    // default: {
    //     console.log("go number!!!");
    // }}


// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.


// let a = 0;
// let b = 9;
// if (a < b) {
//     console.log(b)
// } else if (b < a) {
//     console.log(a)
// } else if (a === b) {
//     console.log(`equal`)
// }


//     - є змінна х, яка може прийняти будь-яке значення
//     (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let s = undefined;
// if (true === !!s)
//     {
//         console.log(115);
//     }
// else if (s === '' || undefined) {
//         console.log("default");
//     } else if (s === null || NaN) {
//         console.log("default");
//     } else if (s === 0) {
//         console.log("default");
//     } else {
//         console.log(111);
//     }

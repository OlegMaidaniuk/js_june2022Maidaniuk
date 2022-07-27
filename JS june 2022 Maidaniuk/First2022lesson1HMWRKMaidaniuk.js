// - Створити змінні. Присвоїти кожному з них значення:
// // 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let myr;
myr = 'hello';
console.log(myr);
// alert(myr);
document.write(myr);

let owu = 'owu';
console.log(owu);
alert(owu);
document.write(owu);

let com = 'com';
console.log(com);
alert(com);
document.write(com);

let ua = `ua`;
console.log(ua);
alert(ua);
document.write(ua);

let tab;
tab = 1;
console.log(tab)
alert(tab);
document.write(tab);

let tab1 = 10;
console.log(tab1, typeof tab1);
alert(tab1);
document.write(tab1);

let tab2 = -999;
console.log(tab2, typeof tab2);
document.write(typeof tab2);
alert(tab2);

let tabpi = 3.14;
console.log(typeof tabpi);
alert(tabpi);
document.write(tabpi);

let taboll = 123;
let taboll1 = 2.7;
let taboll2 = 16;
console.log(typeof taboll, typeof taboll2, typeof taboll2, !!typeof taboll);
prompt();
document.write(taboll, taboll1, tab2, taboll2);

let hi;
hi = true;
console.log(hi);

let fals = false;
console.log(typeof fals);
alert(typeof fals);
document.write(fals);
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)


let firstname = "Miroslav";
let middlname = "Olegovich";
let lastname = "Maidanuk";
let fio = firstname + middlname + lastname;
console.log(fio);

let firstna = 'Oleh';
let middlna = 'Volodymyrovych';
let lastna = 'Maidaniuk;'
let fml1 = `${firstna} ${middlna}  ${lastna}`;
console.log(fml1);
document.write(fml1);
document.write(fml1, typeof fml1);


//
let firstName = "Oleh ";
let middleName = "Volodymyrovych ";
let lastName = 'Maidaniuk ';
let person = firstName + middleName + lastName;
console.log(person);


//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх
// в консоль.
//     let a = 100; let b = '100'; let c = true;
// let a = 100;
// console.log(typeof a);


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими
// Імям, По-Батькові та роками. та вивести в консоль
// let fn = Oleg;
// let mn = Volodumyrovich;
// let ln = Maidaniuk;
// let person1 = fn + '' + mn + '' + ln;
// let person2 = '${fn} ${mn} ${ln}'
// console.log(person2);
let mn1 = prompt('enter your middl name?');
let fn1 = prompt('enter your first name?');
let age1 = +prompt('enter your age?')
let person3 = `${mn1} ${fn1}    ${age1}`;
console.log(person3);
document.write(`<div><p>${person3}</p></div>`);

let agePInt = parseInt(prompt('enter your age?'));
console.log(agePInt);


// let mn1=prompt(`enter your middl name?`)
//
// let fn1 = prompt("enter your middl name?");//
// // ('enter you first name');
// // let mn1 = promtp('enter you middl name');
// let ln1 = promptp('enter you last name name');
//
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function AreaRectangle(a, b) {
//     let Area= a * b;
//     return Area;
//     console.log(Area);
// }
// AreaRectangle(100,20);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle(r) {
//     let rescircle = Math.PI*(r*r);
//     return rescircle;
// }
// let y=circle(50);
// console.log(y);
//
// let d = circle(456);
// console.log(d);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function circ(r, h) {
//     return 3.14 * h * r * 2;
// }
//
// console.log(circ (2,2));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [4,5,6]
//
// function data(array){
//     for (const item of array) {
//         console.log(item);
//
//
//     }
// }
// data(arr);

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1,2,3]
//
// function data(array){
//     for (const item of array) {
//         console.log(item);
//
//
//     }
// }
// data(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function par(text) {
//
//     document.write(`<p> ${text} </p>`)
//
// }
//
// par(`Hello`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo(text) {
//
//     document.write(
//         `<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
//
//
//
// </ul>`
//     )
// }
// foo (`hi`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function liElm(text, num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// liElm(`hi`, `3`)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [1, 2,`hi`, `all`];
//
// function data(arr) {
//     document.write(`<ul>`)
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`)
//
//
//     }
//     document.write(`</ul>`)
//
//         }
//         data(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [
//     {id: 1,name: `Mr.Proper`,age: 70},
//     {id: 2,name:'Galya',age: 67},
//     {id: 3,name:'Stas',age: 25 },
//
//
//
// ]
// function obj(array){
//
//     for (const item of array) {
//
//         document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)
//
//
//     }
//
// }
// obj(arr);

// - створити функцію яка повертає найменьше число з масиву
// let arr = [1, 2, 3, 5, 7, -3]
//
// function minNum(array) {
//     let min = array[0];
//     for (let item of array);
//
//
//
//
//     {
//
//
//         if (item < min);
//
//         {
//             min = item
//         }
//     }
//     return min;
// }
//
// console.log( minNum (arr));



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1, 4, 7 ];
// function foo(array) {
//     let sum = 0;
//     for (const item of array) {
//        sum += item;
//     }
// return sum;
// }
//
// console.log(foo(arr));
// let invertCase = (str) => {
//     let result = "";

//     for(let i = 0; i < str.length; i++){
        
//         if (str[i] === str[i].toUpperCase()){
//             result += str[i].toLowerCase();
//         } if (str[i] === str[i].toLowerCase()){
//             result += str[i].toUpperCase();
//         }
//     }
//     return result;
// }
// console.log(invertCase('I leARn JaVScripT'));


let invertCase = (str) => {
    let result = "";

    for(let i = 0; i < str.length; i++){        
        result = (str[i] === str[i].toUpperCase()) ? (result += str[i].toLowerCase()) : (result += str[i].toUpperCase());
    }
    return result;
}
console.log(invertCase('I leARn JaVScripT'));

//===================================  Реализуйте и экспортируйте по умолчанию функцию reverseInt, 
                                    // которая переворачивает цифры в переданном числе и возвращает новое число.


let reverseInt = (rev) => {
    let sign = Math.sign(rev); // повертає знак числа, вказуючий на те чи є число відємним, додатнім або нулем

    return parseInt(rev.toString().split('').reverse().join(''));
}
console.log(reverseInt(-467));


// зберігає знак числа

//toString - конвертує чило в строку
//split - розбиває строку на масив букв
//reverse - розміщає елементиметоду array в зворотньому порядку
//join - зєднює всі елементи масиву в строку
//parseInt - читає число з строки, 
// прикріпляє sign до числа і повертає


//===================================================
//Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает разницу между ними

const diff = (a, b) => {
    
    let bigAngle = null;
    let smallAngle = null;
    let result1 = null;
    let result2 = null;
    

    if (a >= b) {
        bigAngle = a;
        smallAngle = b;
    }else {
        bigAngle = b;
        smallAngle = a;
    }
    result1 = bigAngle - smallAngle;
    result2 = 360 - (bigAngle + smallAngle);

    if (result1 > result2)
    return result2;
    return result1;
}

console.log(diff(0,45));
console.log(diff(0,190));
console.log(diff(180,180));

// ==============================================================
//Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.
//Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385 (
//Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.
//Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.

const sumSquareDifference = n => {
    let sum1 = 0;
    for(let i = 0; i <= n; i++){
        sum1 += i ** 2;
    }
    let sum2 = 0;
    for (let i = 0; i <= n; i++){
        sum2 += i;
    }
    return (sum2 ** 2) - sum1;
}

console.log(sumSquareDifference(1));
console.log(sumSquareDifference(3));
console.log(sumSquareDifference(8));

// ==============================================================


export default (str) => {
    let acc = 0;
    for (let i = 0; i < str.length; i++){
        const symbol = str[i];
        acc = symbol === '(' ? acc + 1 : acc - 1;
        if(acc < 0) {
            return false;
        }
    }
    return acc === 0;
};


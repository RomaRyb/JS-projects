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
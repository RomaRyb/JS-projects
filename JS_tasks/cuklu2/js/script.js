let out = document.querySelector('.out');

// for(let i = 0; i < 5; i++){
//     for(let k = 0; k < 10; k++){
//         out.innerHTML += '*'
//     }    
//     out.innerHTML += ' ';
// }

//=======================================табличка множення
// for (let i = 1; i < 10; i++){
//     інтерполяція
    
//     for (let k = 1; k < 10; k++){
//         out.innerHTML += `${i} * ${k} = ${k * i}<br>`
//     }

//     out.innerHTML += '<hr>'
// }

//=======================================
//С помощью вложенных циклов, нарисуйте строку: ***_***_***_
// где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.

// for (let i = 0; i < 3; i++) {
//     for (let k = 0; k < 3; k++){
//         out.innerHTML += '*'
//     }
//     out.innerHTML += "_";
// }


//=============================
//С помощью вложенных циклов, нарисуйте строку:
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.
for (let i = 1; i < 4; i++){
    
    for (let k = 1; k < 4; k++){
        let k = '*_';
        out.innerHTML += k + '\n' ;
    }
    out.innerHTML += `${i}<br>`;
}
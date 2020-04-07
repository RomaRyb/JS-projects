let a = [1, 2, 3, 4];
console.log(a);

let t = a[0]; //1
a[0] = a[a.length - 1];
a[a.length - 1] = t
console.log(a);

//vuvid
let out = '';
for (let i = 0; i < a.length; i++){
    if(a[i] % 2 == 0){
        out += a[i] + '_';
    }
}
document.querySelector('.out1').innerHTML = out;

//find min or max el of arr
let b = [4, 2, 5, 23, 43, 1, 2, 6, 12];
let max = b[0]; //4
for(let i = 0; i < b.length; i++){
    if(b[i] > max){
        max =b[i];
    }
}
console.log('max:' + max)

//sum arr
let sum = 0;
for(let i = 0; i < b.length; i++){
    sum = sum + b[i];
}
console.log('sum: ' + sum); 

//Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1
let b1 = document.querySelector('.b1');

ar1 = ['yo', 'lol', 23, 32, true];

b1.onclick = function () {
    let out1 = '';
    for(let i = 0; i < ar1.length; i++){
        out1 += ar1[i] + ' ';
    }
    document.querySelector('.out2').innerHTML = out1;
}


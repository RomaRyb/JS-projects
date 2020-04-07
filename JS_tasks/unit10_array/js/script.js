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
        max = b[i];
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
//==============================
let styles = ['jazz', 'bluzz'];
styles.push('rock-n-roll');
styles[1] = 'classic';
//console.log(styles.shift());
styles.unshift('rap', 'reggy');
console.log(styles);

//======================
function sumInput() {

    let numbers = [];
    while (true) {

    let value = prompt("Введите число", 0);

      // ends enter values
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
    sum += number;
    }
    return sum;
}

//console.log( sumInput() );

//===========================
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // для каждого элемента массива
      partialSum += item; // добавляем значение элемента к partialSum
      maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
      if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    }

    return maxSum;
}

  console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
  console.log( getMaxSubSum([1, 2, 3]) ); // 6
  console.log( getMaxSubSum([-1, -2, -3]) ); // 0

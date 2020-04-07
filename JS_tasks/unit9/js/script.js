const one = document.querySelector('.one');

one.style.width = '300px';
one.style.paddingBottom = '30px';


console.log(one.style)

one.classList.add('two', 'three');
one.classList.remove('three');

const toggle = document.querySelector('.toggle');
toggle.onclick = function(){
    this.classList.toggle('three'); 
}

//attributes   needs data 
console.log(one.getAttribute('data'));
console.log(document.querySelectorAll('link')[0].getAttribute('href'));


let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++){
    gas[i].onclick = function () {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data');
        console.log(gallons * amount);
    }
}



let a = document.createElement('div');
    a.innerHTML = "hello";
    a.classList.add('one'); 

    a.onclick = function() {
        alert ('yofffff!!!!');
    }

    document.querySelector('.test').appendChild(a); 
console.log(a); 

//Добавьте кнопку .b-1, которая запускает функцию f1. Функция присваивает блоку .out-1 ширину 200px, высоту 40px.
let b1 = document.querySelector('.b1');
let out1 = document.querySelector('.out-1');
b1.onclick = function () {
    out1.style.width = '200px'
    out1.style.height = '40px'
}

//По нажатию кнопки b-2 запускайте функцию f2, которая присваивает блоку out-2 класс .bg-2.
    const b2 = document.querySelector('.b2');
    const out2 = document.querySelector('.out-2');

b2.onclick = function() {
    out2.classList.add('bg2');
    out2.style.width = '200px'
    out2.style.height = '40px'
}

function min(a, b) {
    if(a > b){
        return b;
    }else{
        return a;
    }
}


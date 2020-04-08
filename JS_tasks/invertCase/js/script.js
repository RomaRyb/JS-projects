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
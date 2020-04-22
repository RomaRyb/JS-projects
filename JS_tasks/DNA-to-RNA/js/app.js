// const button = document.querySelector('button');
// const input = document.querySelector('.dna');

// function foo (dnaToRna){
//     let x = document.getElementsByTagName('input');
//     document.getElementById('rna').innerHTML = '';
//     for(var i=0;i<x.length;i++){
//         document.getElementById("rna").innerHTML += x[i].value + "/";
//     }
    
// }

//console.log(`result: ${dnaToRna('GCTA')}`);



let dnaToRna = function(dna){
    let rna = '';
    if (dna === '') {
        return '';
    };
    for (let i = 0; i < dna.length; i++) {
        if(dna[i] === 'G'){
            rna += 'C';
        }else if(dna[i] === 'C'){
            rna += 'G'
        }else if(dna[i] ===  'T'){
            rna += 'A';
        }else if(dna[i] === 'A'){
            rna += 'U';
        }
        else{
            return null;
        } 
    };

    return rna;
};

console.log(`result: ${dnaToRna('GCTAGGCAT')}`);


//================================================================= 2





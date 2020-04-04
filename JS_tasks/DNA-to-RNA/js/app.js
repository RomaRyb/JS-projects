// const button = document.querySelector('button');
// const input = document.querySelector('.dna');


const dnaToRna = function(dna){
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
        else null;
    };

    return rna;
};

console.log(`result: ${dnaToRna('GCTA')}`);
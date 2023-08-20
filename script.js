const vick = 'victória';
const nick = 'nicolas';

function combStart(str){
    let arrSubstr = [];

    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j <= str.length; j++){
            arrSubstr.push(str.substring(i, j));
        }
    }

    return arrSubstr;
}

function combEnd(str){
    let arrSubstr = [];

    for (let i = str.length; i >= 0; i--) { 
        for(let j = i; j < str.length; j++){
            console.log(i, j);
            arrSubstr.push(str.substring(i, j + 1));
        }
    }

    return arrSubstr;
}

function combNames(one, two){
    let arrCombNames = [];

    for(let i = 0; i < one.length; i++){
        for(let j = i; j < two.length; j++){
            let comb = one[i] + two[j];
            arrCombNames.push(comb);
        }
    }

    return arrCombNames;
}

let vickPar = combStart(vick);
let nickPar = combEnd(nick);

console.log(vickPar);
console.log(nickPar);
console.log(combNames(vickPar, nickPar));
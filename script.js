const vick = 'victória';
const nick = 'nicolas';

function combs(str) {
        let arrSubstr = [];

        for (let i = 0; i < str.length; i++) {
          for (let j = i + 1; j <= str.length; j++) {
            arrSubstr.push(str.substring(i, j));
          }
        }

        return arrSubstr;
      }

      function combNames(one, two) {
        let arrCombNames = [];

        for (let i = 0; i < one.length; i++) {
          for (let j = 0; j < two.length; j++) {
            let comb = one[i] + two[j];
            arrCombNames.push(comb);
          }
        }

        return arrCombNames;
      }

      let vickPar = combs(vick);
      let nickPar = combs(nick);

console.log(vickPar);
console.log(nickPar);
console.log(combNames(vickPar, nickPar));

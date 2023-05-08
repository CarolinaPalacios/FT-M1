'use strict';

function BinarioADecimal(num) {
   let binario = num;
   let decimal = parseInt(binario, 2);
   return decimal;
}

function DecimalABinario(num) {
 return (num).toString(2);
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

//input is an integer
//convert integer to binary
//count binary digits
//output is the number of binary digits

function binaryDigitCount(n, b) {
  let count = 0
  let binary = parseInt(n).toString(2);
    for ( let i = 0; i < binary.length; i++) {
      if (binary[i] == b) {
        count++
      }
    }
  return count;
}
console.log(binaryDigitCount(15,1));

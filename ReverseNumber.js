function reverseNum(n) {
  let reversedNumber = 0; //reversedNumber is used to store the reverse value. It is  initialized as 0
  let digit;
  while (n != 0) {
    //The while loop runs till the value of num is more than 0
    let digit = n % 10;
    reversedNumber = reversedNumber * 10 + digit;
    n = Math.floor(n / 10);
  }
  return reversedNumber;
  console.log("Reverse number : " + reversedNumber);
}
// NOTE: Please do not modify this function
function main() {
  let result = reverseNum(n);
  console.log(result);
}

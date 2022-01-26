// let rev = 0;
// let num = 12345;
// let lastDigit;

// while(num != 0){
// 	lastDigit = num % 10;
//   rev = rev * 10 + lastDigit;
//   num = Math.floor(num/10);
// }

// console.log("Reverse number : "+rev);


// for(i=10; i<=20; i++){
//   // let's divide the value by 2
//   // if the remainder is zero then it's an even number
 
//   if(i % 2 == 0){
//     console.log(i);
//   }
// }

var number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
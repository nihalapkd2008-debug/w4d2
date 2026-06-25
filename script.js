// const numbers = [1,2,3,4];
// const doubled = numbers.map((num) => {
//   return num * 5;
// })
// console.log(doubled);

const name = ["nihala" ,"amna", "sulu"];
const upperNames = name.map(name =>
  name.toUpperCase()
);
console.log(upperNames);

let score = 1;
score++;
console.log(score);

const fruits = ["apple", "orange", "grape"];
fruits.push("mango");
console.log(fruits);

// const numbers = [1,2,3,4];
// const result =
// numbers.map(
//   num => num * 3

// );
// console.log(result);

const numbers = [1,2,3,4,5,6,7,8,9,10];
const result = numbers.filter(
  num => num > 3
);
console.log(result);
const numbers = [1,2,3,4];
const doubled = numbers.map((num) => {
  return num * 5;
})
console.log(doubled);

const name = ["nihala" ,"amna", "sulu"];
const upperNames = name.map(name =>
  name.toUpperCase()
);
console.log(upperNames);

let score = 1;
score++;
console.log(score);

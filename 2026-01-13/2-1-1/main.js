// 합계 반환 함수
function sum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
const answer = sum(10);
console.log(answer);

// 짝수만 더해서 반환하는 함수
function sumEven(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) total += i;
  }
  return total;
}
const answer1 = sumEven(10);
console.log(answer1);

// 홀수만 더하는 함수
function sumOdd(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) total += i;
  }
  return total;
}
const answer2 = sumOdd(10);
console.log(answer2);

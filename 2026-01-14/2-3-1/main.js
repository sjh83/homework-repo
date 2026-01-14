// 정수를 받아 약수 구하는 함수
// for문으로 돌려서  받은 정수와 나누어 떨어지는지 확인
// 나머지가 0이 나오면 빈객체에 추가

function getDivisors(n) {
  const numbers = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) numbers.push(i);
  }
  return numbers;
}

console.log(getDivisors(12));

// 약수의 개수를 반환하는 함수
// for 문으로 돌려서 나머지가 0이 되면 카운트 ++;
function countDivisors(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count;
}
console.log(countDivisors(12));

// 약수의 합을 반환
// for문으로 빈객체에 약수를 돌려서 추가
// 추가한 객체를 그다음 돌려 더하면? 되겠지?
/* 너무 귀찮게 많이 돌렸다 더 간단하게 약수의 합만 더하기
function sumDivisors(n) {
  const result = [];
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }
  for (let j = 0; j <= result.length - 1; j++) {
    sum += result[j];
  }
  return sum;
}
console.log(sumDivisors(12));
*/
function sumDivisors(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}
console.log(sumDivisors(12));

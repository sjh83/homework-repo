const arr = [5, 12, 8, 130, 44, 3];
// 10이상인 수만 필터링
const filtered = arr.filter((n) => n >= 10);
console.log(filtered);
console.log(Object.values(filtered));

// 필터링된 숫자를 2배로 변환
const double = filtered.map((n) => n * 2);
console.log(double);

// 오름차순으로 정렬
const sorted = double.sort((a, b) => a - b);
console.log(sorted);

// 체이닝으로 한 줄 작성
const result = arr
  .filter((n) => n >= 10)
  .map((n) => n * 2)
  .sort((a, b) => a - b);
console.log(result);

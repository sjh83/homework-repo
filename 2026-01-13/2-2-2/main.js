// 문자열 뒤집기
const str = "hello";
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(str);
console.log(reverse(str));

// 숫자 3자리 패딩
function padThree(num) {
  return String(num).padStart(3, "0");
}

console.log(padThree(5));

// 문자 모두 제거
function removeAll(str, char) {
  return str.replaceAll(char, "");
}
console.log(removeAll("banana", "a"));

/* 특정문자 첫번째 제거
function removeAll(str, char) {
  return str.replace(char, "");
}
console.log(removeAll("banana", "a"));
*/

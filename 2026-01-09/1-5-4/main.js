// 1. 계산 함수들 -> [math.js]로 이동 예정
/* function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
 이동 완료 */

// import로 가져오기
import { add, sub } from "./math.js";
// 2. 프로필 데이터 -> [userProfile.js]로 이동 예정
/*
이동 완료 
const userProfile = {
  name: "신진호",
  age: 229,
};
*/
// userProfile 대표 가져오기
import User from "./userProfile.js";

// 3. 실행 로직 (main.js에 유지)
console.log(add(10, 20));
console.log(sub(20, 10));
console.log(User.name);
console.log(User.age);

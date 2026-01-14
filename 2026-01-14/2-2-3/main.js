function rollDice() {
  // 1. 1~6 정수 반환
  return Math.floor(Math.random() * 6) + 1;
}
// 랜덤 주사위 변수 대입
const diceA = rollDice();
const diceB = rollDice();

// 절대값 차이 반환
function getScore(a, b) {
  return Math.abs(a - b);
}

console.log("주사위 A: ", diceA);
console.log("주사위 B: ", diceB);
console.log(`절대값: ${getScore(diceA, diceB)}`);

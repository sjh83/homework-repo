// 피자 주문 함수(가끔 실패함)

function orderPizza(menu) {
  return new Promise((resolve, reject) => {
    console.log(menu + " 주문 접수 중...");

    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error("재료가 소진되었습니다."));
      } else {
        resolve(menu + " 준비 완료!");
      }
    }, 1000);
  });
}
// 키오스크 메인 로직
async function kiosk() {
  console.log("===기오스크 가동===");
  // TODO: 안전하게 주문 받기(try-catch)
  try {
    const result = await orderPizza("페페로니");
    console.log(result);
    console.log("맛있게 드세요!");
  } catch (error) {
    console.log("죄송합니다.");
    console.log("사유:", error.message);
  } finally {
    console.log("이용해 주셔서 감사합니다.");
  }

  // 성공: "맛있게 드세요."
  // 실패: "죄송합니다.."
}

kiosk();

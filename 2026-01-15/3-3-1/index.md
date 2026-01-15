# 공개 API 응답 분석하기

## 공개 API의 응답 데이터를 확인하고 JSON 구조를 분석할 수 있습니다.

1. 브라우저에서 공개 API URL을 직접 접속해 보세요(예: JSONPlaceholder)
2. 응답데이터의 JSON 구조를 분석하고 각 필드의 의미를 작성하세요
3. Request와 Response의 차이를 실제 예시와 함께 설명하세요
4. API 키가 필요한 이유와 보안상 주의점을 정리하세요.
   1. JSONPlaceholder API 주요 API 목록
      - /posts 게시글 목록
      - /users 사용자 목록
      - /todos 할 일 목록
      - /comments 댓글 목록
      - /albums 앨범 목록
      - /photos 사진 목록
   2. 구조 설명
      - {
        "id": 1, // 게시글 고유 ID
        "title": "첫 번째 글", // 게시글 제목
        "body": "내용...", // 게시글 본문
        "userId": 1 // 이 글을 작성한 사용자 ID
        }
   3. Request와 Response의 차이
      - Request 클라이언트가 서버에 요청
        - POST /posts HTTP/1.1
          Host: jsonplaceholder.typicode.com
          Content-Type: application/json
          {
          "title": "새 글",
          "body": "글 내용입니다.",
          "userId": 1
          }
      - Response 서버가 요청처리 후 결과 반환
        - {
          "id": 101, // 새로 생성된 ID
          "title": "새 글",
          "body": "글 내용입니다.",
          "userId": 1
          }
   4. API 키 필요성 보안 주의점
      1. 필요성으로는 인증 / 요금제 관리 / 사용자 로그추적 / 악용방지가 있다
      2. 주의점으로는 API키 노출 X / 비공개 저장 / 키 재발급 대비 / 도메인, 아이피 제한 설정이있다.

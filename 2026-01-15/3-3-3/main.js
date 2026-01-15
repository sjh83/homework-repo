// 기본적인 fetch로 데이터 받아오기
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((respense) => respense.json())
  .then((data) => {
    console.log(data);
  });

// try - catch
async function getPost() {
  try {
    const respense = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await respense.json();
    console.log(data);
  } catch (err) {
    console.error("에러", err.message);
  }
}
getPost();

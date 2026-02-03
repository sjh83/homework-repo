import React from "react";

const Card = () => {
  const name = "신진호";
  const birthYear = "1998";
  const hobbies = ["축구", "골프", "게임"];
  const currentYear = new Date().getFullYear();
  const mbti = "istp";
  return (
    <>
      <div className="profile">
        <h2>이름: {name}</h2>
        <p>나이: {currentYear - birthYear}</p>
        <p>취미: {hobbies.join(",")}</p>
        <p>mbti: {mbti}</p>
      </div>
    </>
  );
};

export default Card;

import React from "react";

const ProfilCard = ({ name, age, job = "학생" }) => {
  return (
    <div
      style={{
        width: "200px",
        border: "1px, solid#444",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c2f36",
        color: "#f1f1f1",
      }}
    >
      <h2>프로필</h2>
      <h4>{name}</h4>
      <p>
        나이: {age} / 직업: {job}
      </p>
    </div>
  );
};

export default ProfilCard;

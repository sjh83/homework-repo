import React, { useState } from "react";

const Interactive = () => {
  const [card, setCard] = useState(false);
  const [count, setCount] = useState(0);
  const handelClick = (e) => {
    e.stopPropagation();
    setCount((prev) => prev + 1);
  };

  return (
    <div className="card-container">
      <div
        className={`card ${card ? "is-card" : ""}`}
        onClick={() => setCard((prev) => !prev)}
      >
        <div className="card-face front">
          <h3>Username</h3>
          <p>Frontend Dev</p>
          <button type="button" onClick={handelClick}>
            hart{count}
          </button>
        </div>
        <div className="card-face back">
          <h3>My Skills</h3>
          <div>
            <p>React</p>
            <button type="button" onClick={handelClick}>
              hart{count}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interactive;

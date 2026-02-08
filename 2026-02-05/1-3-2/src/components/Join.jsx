import React, { useState } from "react";

const Join = () => {
  const [email, setEmail] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const ispwMatch = pw !== pw2;
  const [agreed, setAgreed] = useState(false);
  const checkEmail = () => {
    if (!email.includes("@")) {
      alert("이메일 형식 아님");
      return;
    }
    if (email === "test@test.com") {
      alert("이미 사용중인 이메일");
    } else {
      setEmailMsg("사용가능한 이메일");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("약관 동의 필요");
      return;
    }
    if (ispwMatch) {
      alert("비밀번호 확인 필요");
      return;
    }
    alert("가입 완료!");
  };
  return (
    <div className="membership">
      <h3>회원가입</h3>
      <form onSubmit={handleSubmit} className="container">
        <div className="head">
          <div>
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailMsg("");
              }}
            />
            <button type="button" onClick={checkEmail}>
              중복확인
            </button>
          </div>
          {emailMsg && <span style={{ color: "green" }}>{emailMsg}</span>}
        </div>
        <div className="password">
          <input
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={pw2}
            onChange={(e) => setPw2(e.target.value)}
          />
          {ispwMatch ? "비밀번호 불일치" : ""}
        </div>

        <label>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          이용약관에 동의합니다
        </label>

        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};

export default Join;

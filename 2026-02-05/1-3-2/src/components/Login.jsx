import React from "react";
import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="Login-box">
      <img
        src={
          isLogin
            ? "https://img.icons8.com/?size=48&id=dlN23b953qvQ&format=png"
            : "https://img.icons8.com/?size=80&id=N4H2Joipz7qi&format=png"
        }
        alt="로그인상태"
      />
      <h3>{isLogin ? "환영합니다" : "로그인해주세요"}</h3>
      <p>{isLogin ? "하이" : "더 많은 기능 보려면 로그인ㄱ"}</p>
      <button className="loginbtn" onClick={handleLogin}>
        {isLogin ? "로그아웃" : "로그인"}
      </button>
    </div>
  );
};

export default Login;

import React from "react";
import ProfilCard from "./components/ProfilCard";

const App = () => {
  return (
    <div>
      <ProfilCard name="신진호" age={29} />
    </div>
  );
};

export default App;

{
  /*import React from "react";
import StudentsCard from "./components/StudentsCard";
import ProfileLayout from "./components/ProfileLayout";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import Mirror from "./components/Mirror";
import ColorBox from "./components/ColorBox";
import TrafficLight from "./components/TrafficLight";
import LoginCheck from "./components/LoginCheck";

const App = () => {
  return (
    <>
      <ProfileLayout>
        <h3>학생증</h3>
        <StudentsCard name="신진호" studentid={29} />
        <h3>학생증</h3>
        <StudentsCard name="신진호" studentid={29} major="컴퓨터" />
        <hr />
        <Counter />
        <hr />
        <Toggle />
        <hr />
        <Mirror />
        <hr />
        <ColorBox />
        <hr />
        <TrafficLight />
        <hr />
        <LoginCheck />
      </ProfileLayout>
    </>
  );
};

export default App;*/
}

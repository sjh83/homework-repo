import React from "react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Card from "./assets/components/Card";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="mainContent">
        <Card />
      </main>
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Vacancy from "./components/Vacancy";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Vacancy
          featured={true}
          logo="photosnap"
          employer="photosnap"
          title="Senior Frontent Developer"
          date="1 day ago"
          empType="Full Time"
          residence="USA only"></Vacancy>
      </div>
    </div>
  );
}

export default App;

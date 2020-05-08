import React from "react";
import Vacancy from "./components/Vacancy";
import "./app.scss";

function App() {
  const vacancies = require("./data.json");
  return (
    <div className="app">
      <div className="container">
        <div className="vacancies">
          {vacancies.map((vacancy) => {
            return (
              <Vacancy
                key={vacancy.id}
                new={vacancy.new}
                feat={vacancy.featured}
                logo={vacancy.logo}
                employer={vacancy.company}
                title={vacancy.position}
                date={vacancy.postedAt}
                empType={vacancy.contract}
                residence={vacancy.location}
                tags={[
                  vacancy.role,
                  vacancy.level,
                  vacancy.languages,
                  vacancy.tools,
                ]}></Vacancy>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

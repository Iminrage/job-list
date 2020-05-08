import React, { useState } from "react";
import Vacancy from "./components/Vacancy";
import "./app.scss";

function App() {
  let vacancies = require("./data.json");
  const [activeTags, setActiveTag] = useState([]);
  const getTag = (tag) => {
    setActiveTag([...activeTags, tag]);
    console.log(activeTags);
  };
  return (
    <div className="app">
      <div className="container">
        {activeTags}
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
                ]}
                click={getTag}></Vacancy>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

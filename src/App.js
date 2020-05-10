import React, { useState, useEffect } from "react";
import Vacancy from "./components/Vacancy";
import Filter from "./components/Filter";
import "./app.scss";

function App() {
  let vacancies = require("./data.json");
  const [filteredVacancies, setFilteredVacancies] = useState(vacancies);
  const [activeTags, setActiveTag] = useState([]);
  const [height, setHeight] = useState("");
  function getTag(tag) {
    setActiveTag([...activeTags, tag]);
    setHeight("increase");
  }
  function removeTag(tag) {
    console.log("asdf");
    let newArr = activeTags;
    newArr.splice(newArr.indexOf(tag), 1);
    setActiveTag([...newArr]);
    setHeight("decrease");
  }
  function clear() {
    setActiveTag([]);
    setHeight("decrease");
  }
  function filterVacancies(change) {
    function filterV(vacancy) {
      let allTags = [vacancy.role, vacancy.level];
      if (vacancy.tools) allTags = [...allTags, ...vacancy.tools];
      if (vacancy.languages) allTags = [...allTags, ...vacancy.languages];
      return activeTags.every((tag) => {
        return allTags.includes(tag);
      });
    }
    if (change === "increase") {
      setFilteredVacancies(filteredVacancies.filter(filterV));
    } else if (change === "decrease") {
      setFilteredVacancies(vacancies.filter(filterV));
    }
  }
  useEffect(() => {
    filterVacancies(height);
  }, [activeTags]);
  return (
    <div className="app">
      <div className="container">
        {activeTags.length > 0 && (
          <div className="filter-wrapper">
            <Filter
              tags={activeTags}
              removeTag={removeTag}
              clear={clear}></Filter>
          </div>
        )}
        <div className="vacancies">
          {filteredVacancies.map((vacancy) => {
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

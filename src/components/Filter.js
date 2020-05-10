import React from "react";
import "./filter.scss";

export default (props) => {
  return (
    <div className="filter">
      <div className="filter__items">
        {props.tags.map((tag, index) => {
          return (
            <button
              className="filter__btn"
              key={index}
              onClick={() => {
                props.removeTag(tag);
              }}>
              {tag}
            </button>
          );
        })}
      </div>
      <button className="filter__clear" onClick={props.clear}>
        Clear
      </button>
    </div>
  );
};

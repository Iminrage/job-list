import React from "react";
import "./vacancy.scss";
export default (props) => {
  return (
    <div className={`vacancy ${props.feat && "vacancy--feat"}`}>
      <div className="vacancy__logo-wrapper">
        <img
          src={require(`${props.logo}`)}
          alt={props.logo}
          className="vacancy__logo-wrapper img-responsive"
        />
      </div>
      <div className="vacancy__description">
        <div className="vacancy__row">
          <div className="vacancy__employer">{props.employer}</div>
          <div className="vacancy__labels">
            <button
              className={`label label--new ${props.new && "label--active"}`}>
              new!
            </button>
            <button
              className={`label label--feat ${props.feat && "label--active"}`}>
              featured
            </button>
          </div>
        </div>
        <div className="vacancy__title-wrapper vacancy__row">
          <h2 className="vacancy__title">{props.title}</h2>
        </div>
        <div className="vacancy__special-info vacancy__row">
          <div className="special-info__item vacancy__date">{props.date}</div>
          <div className="special-info__item vacancy__employment-type">
            {props.empType}
          </div>
          <div className="special-info__item vacancy__residence">
            {props.residence}
          </div>
        </div>
      </div>
      <div className="">
        {props.tags.map((tag, index) => {
          if (Array.isArray(tag)) {
            return tag.map((el, idx) => {
              const subIndex = +(
                index + idx.toString().split("").reverse().join("")
              );
              return (
                <button className="vacancy__tag" key={subIndex}>
                  {el}
                </button>
              );
            });
          } else if (typeof tag === "string") {
            return (
              <button className="vacancy__tag" key={index}>
                {tag}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  {
    name: "Start",
    path: "/",
    exact: true,
  },
  {
    name: "Wall Art",
    path: "/wallart",
    dropName1: "Clocks",
    dropPath1: "/products/clocks",
    dropName2: "Hangers",
    dropPath2: "/products/hangers",
  },
  {
    name: "Floor Art",
    path: "/floorart",
    dropName1: "Tables",
    dropPath1: "/products/tables",
    dropName2: "Chairs",
    dropPath2: "/products/chairs",
  },
  {
    name: "History",
    path: "/history",
    dropName1: "Archive",
    dropPath1: "/products/archive",
    dropName2: "About me",
    dropPath2: "/aboutme",
  },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <div key={item.name} className="navigation__link dropdown">
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
      {item.dropName1 && (
        <div className="dropdown-content">
          <div className="dropdown-element">
            <NavLink
              to={item.dropPath1}
              exact={item.exact ? item.exact : false}
            >
              {item.dropName1}
            </NavLink>
          </div>
          {item.dropName2 && (
            <div className="dropdown-element">
              <NavLink
                to={item.dropPath2}
                exact={item.exact ? item.exact : false}
              >
                {item.dropName2}
              </NavLink>
            </div>
          )}
          {item.dropName3 && (
            <div className="dropdown-element">
              <NavLink
                to={item.dropPath3}
                exact={item.exact ? item.exact : false}
              >
                {item.dropName3}
              </NavLink>
            </div>
          )}
        </div>
      )}
    </div>
  ));

  return <nav className="navigation">{menu}</nav>;
};

export default Navigation;

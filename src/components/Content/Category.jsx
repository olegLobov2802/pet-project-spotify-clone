import React from "react";
import { NavLink } from "react-router-dom";

export const Category = ({ category, getPlaylistCategory }) => {
  return (
    <div className="category__wrap">
      {category.map((item) => (
        <NavLink
          to={"/playlist"}
          key={item.id}
          onClick={() => getPlaylistCategory(item.id)}
        >
          <div className="category__item">
            <div className="category__cover">
              <img className="cover__img" src={item.icons[0].url} alt="" />
            </div>
            <div className="category__name">{item.name}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

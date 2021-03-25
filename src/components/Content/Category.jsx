import React from "react";

export const Category = ({ category }) => {
  return (
    <>
        {category.map((item) => (
            <div className="category__wrap">
              <div className="category__item">
                <div className="category__cover">
                  <img className="cover__img" src={item.icons[0].url} alt="" />
                </div>
                <div className="category__name">{item.name}</div>
              </div>
            </div>
        ))}
      </>
  );
};

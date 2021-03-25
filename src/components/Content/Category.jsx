import React from "react";
import { PlaylistContainer } from "./Playlist";

export const Category = () => {
  return (
    <ul className="playlist">
      <li className="playlist__category">
        <div className="category">
          <div className="category__name">Топ новинок 2020</div>
          <div className="category__descr">
            Здесь найдется музыка для любого настроения.
          </div>
        </div>
        <ul className="playlist__items">
          <PlaylistContainer />
        </ul>
      </li>
    </ul>
  );
};

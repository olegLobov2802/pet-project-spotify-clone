import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import icon from "../../img/icon.png";
import React from "react";
import HomeIcon from '@material-ui/icons/Home.js';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import SearchIcon from '@material-ui/icons/Search';

export const Navbar = () => {

  return (
    <div className="sidebar">
      <div className="sidebar__column">
        <div className="sidebar__logo">
          <NavLink className="logo__link" to={"/"}>
            <img className="logo__item" src={logo} alt="#" />
          </NavLink>
        </div>
        <nav className="menu">
          <div className="menu__list">
            <NavLink
              to={"/"}
              exact
              activeClassName="active"
              className="menu__item"
            >
              <HomeIcon style={{ color: '#fff' }} className="menu__icon" />
              <div className="menu__link">Главная</div>
            </NavLink>
            <NavLink
              to={"/Category"}
              activeClassName="active"
              className="menu__item"
            >
              <PlaylistPlayIcon style={{ color: '#fff' }} className="menu__icon" />
              <div className="menu__link">Категории</div>
            </NavLink>
            <NavLink
              to={"/search"}
              activeClassName="active"
              className="menu__item"
            >
              <SearchIcon style={{ color: '#fff' }} className="menu__icon" />
              <div className="menu__link">Поиск</div>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

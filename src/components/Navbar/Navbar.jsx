import {NavLink} from "react-router-dom";
import logo from "../../img/logo.png";
import icon from "../../img/icon.png";
import React from "react";

export const Navbar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__column">
        <div className="sidebar__logo">
          <NavLink className="logo__link" to={"/home"}>
            <img className="logo__item" src={logo} alt="#" />
          </NavLink>
        </div>
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item active">
              <img src={icon} alt="#" className="menu__icon" />
              <NavLink to={"/home"} className="menu__link">
                Главная
              </NavLink>
            </li>
            <li className="menu__item active">
              <img src={icon} alt="#" className="menu__icon" />
              <NavLink to={"/Category"} className="menu__link">
                Категории
              </NavLink>
            </li>
            <li className="menu__item">
              <img src={icon} alt="#" className="menu__icon" />
              <NavLink to={"/search"} className="menu__link">
                Поиск
              </NavLink>
            </li>
            <li className="menu__item">
              <img src={icon} alt="#" className="menu__icon" />
              <NavLink to={"/MyLibrary"} className="menu__link">
                Моя медиатека
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
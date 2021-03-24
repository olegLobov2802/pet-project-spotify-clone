import React from "react";
import "./App.scss";
import logo from "./img/logo.png";
import icon from "./img/icon.png";
import cover from "./img/cover.jpg";

function App() {
  // test commit
  return (
    <div className="container">
      <div className="wrapper">
        <div className="sidebar">
          <div className="sidebar__column">
            <div className="sidebar__logo">
              <a className="logo__link" href="#">
                <img className="logo__item" src={logo} alt="#" />
              </a>
            </div>
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item active">
                  <img src={icon} alt="#" className="menu__icon" />
                  <a href="#" className="menu__link">
                    Главная
                  </a>
                </li>
                <li className="menu__item">
                  <img src={icon} alt="#" className="menu__icon" />
                  <a href="#" className="menu__link">
                    Поиск
                  </a>
                </li>
                <li className="menu__item">
                  <img src={icon} alt="#" className="menu__icon" />
                  <a href="#" className="menu__link">
                    Моя медиатека
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="content">
          <div className="content__wrapper">
            <ul className="playlist">
              <li className="playlist__category">
                <div className="category">
                  <div className="category__name">Топ новинок 2020</div>
                  <div className="category__descr">
                    Здесь найдется музыка для любого настроения.
                  </div>
                </div>
                <ul className="playlist__items">
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                </ul>
              </li>

              <li className="playlist__category">
                <div className="category">
                  <div className="category__name">Топ новинок 2020</div>
                  <div className="category__descr">
                    Здесь найдется музыка для любого настроения.
                  </div>
                </div>
                <ul className="playlist__items">
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                </ul>
              </li>

              <li className="playlist__category">
                <div className="category">
                  <div className="category__name">Топ новинок 2020</div>
                  <div className="category__descr">
                    Здесь найдется музыка для любого настроения.
                  </div>
                </div>
                <ul className="playlist__items">
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                  <li className="playlist__item">
                    <div className="playlist__cover">
                      <img className="cover__img" src={cover} alt="" />
                    </div>
                    <div className="playlist__name">playlist-name</div>
                    <div className="playlist__descr">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, ducimus.
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";

function Header() {
  return (
    <nav className="blue lighten-4">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Поиск Фильмов
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Жанры</a>
          </li>
          <li>
            <a href="#">Страна</a>
          </li>
          <li>
            <a href="#">Год выпуска</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };

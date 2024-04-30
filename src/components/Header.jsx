import React from "react";

function Header(props) {
  return (
    <header className="header">
      <div>
        <img src="../img/img_logo.svg" alt="img_logo" />
        <div>
          <h3>React Sneakers</h3>
          <p>Магазин лучших кросовок</p>
        </div>
      </div>
      <ul className="ul">
        <li onClick={props.onClickCart}>
          <img src="/icons/ic_telega.svg" alt="ic_telega" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img src="../icons/ic_heart.svg" alt="ic_heart" />
          <span>Закладки</span>
        </li>
        <li>
          <img src="../icons/ic_profile.svg" alt="ic_profile" />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;

import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FaSearch, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="menu__links">
            <Link className="menu__item active" to="/">
              HOME
            </Link>
            <Link className="menu__item" to="/">
              ABOUT
            </Link>
            <Link className="menu__item" to="/">
              SERVICES
            </Link>
            <Link className="menu__item" to="/">
              SHOP
            </Link>
            <Link className="menu__item" to="/">
              BLOG
            </Link>
            <Link className="menu__item" to="/">
              CONTACT
            </Link>
          </div>
          <div className="shop">
            <div className="search">
              <FaSearch />
            </div>
            <div className="login">
              <FaUserAlt />
            </div>
            <div className="cart">
              <FaShoppingCart /> <span>(0)</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

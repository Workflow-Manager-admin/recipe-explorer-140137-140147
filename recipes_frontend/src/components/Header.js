import React from "react";
import "./Header.css";

/**
 * Header navigation component.
 * PUBLIC_INTERFACE
 * @param {Object} props
 * @param {Function} props.onSearch - Callback for search input.
 */
function Header({ onSearch }) {
  return (
    <header className="header">
      <div className="header__brand">
        <span role="img" aria-label="Recipe Explorer" className="header__logo">
          🍳
        </span>
        <span className="header__title">Recipe Explorer</span>
      </div>
      <nav className="header__nav">
        <a href="/" className="header__nav-link" tabIndex={0}>Home</a>
        <a href="/favorites" className="header__nav-link" tabIndex={0}>Favorites</a>
      </nav>
      <input
        className="header__search"
        type="search"
        placeholder="Search recipes…"
        aria-label="Search"
        onChange={e => onSearch(e.target.value)}
      />
    </header>
  );
}

export default Header;

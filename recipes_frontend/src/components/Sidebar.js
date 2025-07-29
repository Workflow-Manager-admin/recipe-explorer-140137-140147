import React from "react";
import "./Sidebar.css";

/**
 * Sidebar component for displaying recipe filters/categories.
 * PUBLIC_INTERFACE
 * @param {Object} props
 * @param {string[]} props.categories - List of available categories.
 * @param {string} props.selectedCategory - Currently selected category.
 * @param {Function} props.onCategoryChange - Callback for changing category.
 */
function Sidebar({ categories, selectedCategory, onCategoryChange }) {
  return (
    <aside className="sidebar">
      <h3 className="sidebar__title">Categories</h3>
      <ul className="sidebar__list">
        <li
          className={`sidebar__item${!selectedCategory ? " sidebar__item--active" : ""}`}
          tabIndex={0}
          role="button"
          onClick={() => onCategoryChange("")}
        >
          All
        </li>
        {categories.map(category => (
          <li
            key={category}
            className={`sidebar__item${selectedCategory === category ? " sidebar__item--active" : ""}`}
            tabIndex={0}
            role="button"
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;

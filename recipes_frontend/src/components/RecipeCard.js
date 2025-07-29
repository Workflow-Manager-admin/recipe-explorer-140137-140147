import React from "react";
import "./RecipeCard.css";

/**
 * RecipeCard component displays a recipe summary.
 * PUBLIC_INTERFACE
 * @param {Object} props
 * @param {Object} props.recipe
 * @param {boolean} props.isFavorite
 * @param {Function} props.onSelect
 * @param {Function} props.onToggleFavorite
 */
function RecipeCard({ recipe, isFavorite, onSelect, onToggleFavorite }) {
  return (
    <div className="recipe-card" tabIndex={0}>
      <div className="recipe-card__img-wrapper" onClick={onSelect}>
        <img
          src={recipe.image || "/placeholder.jpg"}
          alt={recipe.title}
          className="recipe-card__img"
        />
      </div>
      <div className="recipe-card__body">
        <div className="recipe-card__title-row">
          <h4 className="recipe-card__title" onClick={onSelect}>{recipe.title}</h4>
          <button
            className={`recipe-card__favorite${isFavorite ? " recipe-card__favorite--active" : ""}`}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            onClick={e => { e.stopPropagation(); onToggleFavorite(); }}
          >
            {isFavorite ? "★" : "☆"}
          </button>
        </div>
        <div className="recipe-card__meta">
          <span>{recipe.category}</span>
          <span>{recipe.prepTime ? `${recipe.prepTime} min` : ""}</span>
        </div>
        <p className="recipe-card__desc">{recipe.description}</p>
      </div>
    </div>
  );
}

export default RecipeCard;

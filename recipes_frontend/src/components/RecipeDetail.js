import React from "react";
import "./RecipeDetail.css";

/**
 * Modal component for showing recipe details.
 * PUBLIC_INTERFACE
 * @param {Object} props
 * @param {Object} props.recipe
 * @param {boolean} props.isFavorite
 * @param {Function} props.onClose
 * @param {Function} props.onToggleFavorite
 */
function RecipeDetail({ recipe, isFavorite, onClose, onToggleFavorite }) {
  if (!recipe) return null;
  return (
    <div className="recipe-detail__overlay" onClick={onClose}>
      <div
        className="recipe-detail"
        onClick={e => e.stopPropagation()}
        aria-modal="true"
        role="dialog"
        tabIndex={-1}
      >
        <button className="recipe-detail__close" onClick={onClose} aria-label="Close">&times;</button>
        <div className="recipe-detail__img-wrapper">
          <img
            src={recipe.image || "/placeholder.jpg"}
            alt={recipe.title}
            className="recipe-detail__img"
          />
        </div>
        <h2 className="recipe-detail__title">
          {recipe.title}
          <button
            className={`recipe-detail__favorite${isFavorite ? " recipe-detail__favorite--active" : ""}`}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            onClick={onToggleFavorite}
          >
            {isFavorite ? "★" : "☆"}
          </button>
        </h2>
        <div className="recipe-detail__meta">
          <span>{recipe.category}</span>
          <span>{recipe.prepTime ? `${recipe.prepTime} min` : ""}</span>
        </div>
        <p className="recipe-detail__desc">{recipe.description}</p>
        <div className="recipe-detail__section">
          <h4>Ingredients</h4>
          <ul>
            {recipe.ingredients && recipe.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="recipe-detail__section">
          <h4>Instructions</h4>
          <ol>
            {recipe.instructions && recipe.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;

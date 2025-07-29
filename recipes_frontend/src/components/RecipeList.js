import React from "react";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

/**
 * RecipeList displays recipes in a responsive grid.
 * PUBLIC_INTERFACE
 * @param {Object} props
 * @param {Array} props.recipes - Array of recipe objects.
 * @param {Function} props.onSelect - Handler to view recipe details.
 * @param {Array} props.favorites - Array of favorite recipe IDs.
 * @param {Function} props.onToggleFavorite - Handler to toggle favorite recipe.
 */
function RecipeList({ recipes, onSelect, favorites, onToggleFavorite }) {
  return (
    <section className="recipe-list">
      {recipes.length === 0 ? (
        <div className="recipe-list__empty">No recipes found.</div>
      ) : (
        <div className="recipe-list__grid">
          {recipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={favorites.includes(recipe.id)}
              onSelect={() => onSelect(recipe)}
              onToggleFavorite={() => onToggleFavorite(recipe.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default RecipeList;

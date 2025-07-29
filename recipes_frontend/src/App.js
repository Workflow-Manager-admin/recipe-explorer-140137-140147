import React, { useEffect, useState } from "react";
import "./App.css";
import { RecipeProvider, useRecipeContext } from "./context/RecipeContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import Footer from "./components/Footer";

/**
 * Main content area composed of sidebar, recipe grid/list, and modal.
 */
function MainLayout() {
  const {
    filteredRecipes,
    categories,
    selectedCategory,
    setSelectedCategory,
    setSearchTerm,
    favorites,
    toggleFavorite
  } = useRecipeContext();

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Handle Esc for modal close
  useEffect(() => {
    if (!selectedRecipe) return;
    const handler = e => {
      if (e.key === "Escape") setSelectedRecipe(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedRecipe]);

  return (
    <div className="layout">
      <Header onSearch={setSearchTerm} />
      <div className="layout__body">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <main className="main-content" tabIndex={-1}>
          <RecipeList
            recipes={filteredRecipes}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onSelect={recipe => setSelectedRecipe(recipe)}
          />
        </main>
      </div>
      <Footer />
      <RecipeDetail
        recipe={selectedRecipe}
        isFavorite={selectedRecipe && favorites.includes(selectedRecipe.id)}
        onClose={() => setSelectedRecipe(null)}
        onToggleFavorite={() =>
          selectedRecipe && toggleFavorite(selectedRecipe.id)
        }
      />
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  // Theme persistence via localStorage
  const [theme, setTheme] = useState(() =>
    window.localStorage.getItem("app_theme") || "light"
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("app_theme", theme);
  }, [theme]);
  // Optionally allow theme toggle in the header/footer if you wish

  return (
    <RecipeProvider>
      <MainLayout />
    </RecipeProvider>
  );
}

export default App;

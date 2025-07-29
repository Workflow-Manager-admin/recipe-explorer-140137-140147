import React, { createContext, useContext, useEffect, useState } from "react";

// Demo/mock data for recipes
const mockRecipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    description: "Classic Italian pasta with a creamy sauce.",
    category: "Pasta",
    prepTime: 25,
    image: "https://source.unsplash.com/400x300/?pasta",
    ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan cheese", "Black pepper"],
    instructions: [
      "Boil the pasta.",
      "Cook pancetta until crisp.",
      "Mix eggs and cheese.",
      "Combine everything, season with pepper."
    ]
  },
  {
    id: 2,
    title: "Avocado Toast",
    description: "A modern brunch staple with avocado and bread.",
    category: "Breakfast",
    prepTime: 10,
    image: "https://source.unsplash.com/400x300/?avocado,toast",
    ingredients: ["Bread", "Avocado", "Salt", "Lemon juice", "Pepper", "Chili flakes"],
    instructions: [
      "Toast the bread.",
      "Mash avocado, season.",
      "Spread avocado on toast.",
      "Top with chili flakes."
    ]
  },
  {
    id: 3,
    title: "Chocolate Chip Cookies",
    description: "Chewy chocolate cookies for dessert lovers.",
    category: "Dessert",
    prepTime: 30,
    image: "https://source.unsplash.com/400x300/?cookie",
    ingredients: ["Flour", "Sugar", "Butter", "Egg", "Chocolate chips", "Vanilla"],
    instructions: [
      "Preheat oven.",
      "Mix dry and wet ingredients separately.",
      "Combine and add chocolate chips.",
      "Scoop onto baking sheet, bake 10-12 min."
    ]
  }
];

const defaultCategories = ["Pasta", "Breakfast", "Dessert"];

/**
 * Recipe App Context for favorites, recipes, categories.
 * PUBLIC_INTERFACE
 */
const RecipeContext = createContext();

/**
 * Provider component to wrap with app
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export function RecipeProvider({ children }) {
  // Ideally, load from backend or API
  const [recipes] = useState(mockRecipes);

  // Local storage keys
  const FAVORITES_KEY = "recipeApp.favorites";

  // Load/save favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    const stored = window.localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  // Save favorites to localStorage on change
  useEffect(() => {
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  // Search and category filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter logic
  const filteredRecipes = recipes.filter(recipe =>
    (!selectedCategory || recipe.category === selectedCategory) &&
    (!searchTerm ||
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Toggle favorite
  const toggleFavorite = id => {
    setFavorites(favs =>
      favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]
    );
  };

  // Only favorites
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

  // Environment-based backend API URL (demonstration only)
  const apiUrl = process.env.REACT_APP_RECIPES_API_URL;

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        filteredRecipes,
        favoriteRecipes,
        favorites,
        toggleFavorite,
        categories: defaultCategories,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        apiUrl
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useRecipeContext() {
  return useContext(RecipeContext);
}

import React, { useContext } from "react";
import MyContext from "../ContextAPI/MyContext";
import { Link } from "react-router";

export default function SearchBar() {
  const { Food, setFood, setFoodList, FoodList } = useContext(MyContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Food.trim() !== "") {
      setFoodList([...FoodList, Food]);
      setFood("");
    }
  };

  const removeItem = (index) => {
    const updatedList = [...FoodList];
    updatedList.splice(index, 1);
    setFoodList(updatedList);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
              Food Recipe Finder
            </span>
          </h1>
          <p className="text-blue-200 font-medium">
            Add ingredients to find delicious recipes
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-grow">
              <input
                type="text"
                value={Food}
                onChange={(e) => setFood(e.target.value)}
                placeholder="Enter food ingredients..."
                className="w-full px-5 py-3 rounded-xl bg-gray-700 bg-opacity-70 border border-gray-600 focus:border-yellow-500 focus:outline-none text-white placeholder-gray-400 shadow-lg transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white font-bold rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 shadow-lg shadow-yellow-500/20"
            >
              Add Ingredient
            </button>
          </div>
        </form>

        {FoodList.length > 0 ? (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-yellow-400 mb-4 pb-2 border-b border-yellow-500 border-opacity-30">
              Your Ingredients
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FoodList.map((value, index) => (
                <li 
                  key={index} 
                  className="bg-gray-700 bg-opacity-50 rounded-xl p-4 flex justify-between items-center hover:bg-opacity-70 transition-all duration-300"
                >
                  <span className="text-white font-medium truncate">{value}</span>
                  <button
                    onClick={() => removeItem(index)}
                    className="ml-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm transition-colors duration-300"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mb-8 text-center py-8 bg-gray-700 bg-opacity-40 rounded-2xl">
            <div className="text-5xl mb-4">🥦🍗🧀</div>
            <h3 className="text-xl text-white font-medium mb-2">
              No ingredients added yet
            </h3>
            <p className="text-blue-200">
              Start by adding ingredients to find recipes
            </p>
          </div>
        )}

        <div className="flex justify-center">
          <Link
            to={FoodList.length > 0 ? "/FoodRecipe" : "#"}
            className={`w-full max-w-xs px-8 py-4 text-center font-bold rounded-xl cursor-pointer transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-opacity-50 shadow-lg ${
              FoodList.length > 0
                ? "bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 hover:scale-[1.03] focus:ring-green-500 shadow-green-500/20 text-white"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            Find Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}
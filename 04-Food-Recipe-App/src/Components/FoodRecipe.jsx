import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../ContextAPI/MyContext';
import axios from "axios";
import { Link } from 'react-router';

export default function FoodRecipe() {
    const { FoodList, Recipes, setRecipes } = useContext(MyContext);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setError(false);
        
        axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${FoodList.join(',')}`)
            .then((res) => {
                if (res.data.data?.recipes?.length > 0) {
                    setRecipes(res.data.data.recipes);
                } else {
                    setError(true);
                }
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("API Error:", err);
                setError(true);
                setIsLoading(false);
            });
    }, [FoodList, setRecipes]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <header className="mb-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-3">
                        <span className="bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
                            Food Recipes
                        </span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-blue-300 max-w-2xl mx-auto">
                        Discover amazing recipes for 
                        <span className="font-semibold text-yellow-300"> {FoodList.join(", ")} </span>
                        suggested by top chefs worldwide
                    </p>
                </header>

                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="text-center">
                            <div className="relative mx-auto w-24 h-24 mb-6">
                                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-500 border-r-red-500 animate-spin"></div>
                                <div className="absolute inset-4 rounded-full border-4 border-transparent border-b-yellow-500 border-l-red-500 animate-spin-reverse"></div>
                            </div>
                            <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-2">
                                Cooking Up Recipes
                            </h3>
                            <p className="text-blue-300">
                                Finding Food Recipes for {FoodList.join(", ")}...
                            </p>
                        </div>
                    </div>
                ) : error || Recipes.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="inline-block bg-gray-800 p-8 rounded-full mb-6 border-2 border-yellow-500 border-opacity-30">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">No Food Recipe Found</h3>
                        <p className="text-blue-300 max-w-md mx-auto">
                            We couldn't find any recipes for "{FoodList.join(", ")}". Try different ingredients!
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Recipes.map((recipe, index) => (
                            <div 
                                key={index} 
                                className="bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700"
                            >
                                <div className="relative">
                                    <img 
                                        src={recipe.image_url} 
                                        alt={recipe.title} 
                                        className="w-full h-56 object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-red-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                                        {recipe.publisher}
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                                        {recipe.title}
                                    </h3>
                                    
                                    <div className="flex items-center justify-between mt-6">
                                        <div className="flex items-center">
                                            
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-12 text-center">
                    <Link 
                        to="/" 
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to Search
                    </Link>
                </div>
            </div>
        </div>
    );
}

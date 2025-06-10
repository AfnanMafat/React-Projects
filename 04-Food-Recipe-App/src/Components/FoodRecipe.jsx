import React, { useContext, useEffect } from 'react'
import MyContext from '../ContextAPI/MyContext'
import axios from "axios"

export default function FoodRecipe() {

    const {FoodList,Recipes,setRecipes} = useContext(MyContext);

    useEffect(()=>{
        axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${FoodList}`).then((res)=>{
        console.log(res.data.data.recipes);
        setRecipes([...Recipes,res.data.data.recipes])
    })
    },[])
    
  return (
    <>
        {Recipes.map((value)=>{
            <h1>{value.publisher}</h1>
        })}
    </>
  )
}

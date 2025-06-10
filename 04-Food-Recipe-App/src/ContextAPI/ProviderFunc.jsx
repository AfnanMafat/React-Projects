import React, { Children, useState } from 'react'
import MyContext from './MyContext'

export default function ProviderFunc({children}) {

    const [Food,setFood] = useState("")
    const [FoodList,setFoodList] = useState([])
    const [Recipes,setRecipes] = useState([])

  return (
    <MyContext.Provider value={{Food,setFood,FoodList,setFoodList,Recipes,setRecipes}}>
        {children}
    </MyContext.Provider>
  )
}

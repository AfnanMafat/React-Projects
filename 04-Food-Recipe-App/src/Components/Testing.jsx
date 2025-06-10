import React, { useContext } from 'react'
import MyContext from '../ContextAPI/MyContext'

export default function Testing() {

    const {Food,FoodList} = useContext(MyContext);
    console.log(FoodList);
    console.log(Food);
    
  return (
    <>
        <h1>{Food}</h1>
        <h1>{FoodList}</h1>
    </>
  )
}

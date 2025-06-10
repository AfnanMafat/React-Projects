import React from 'react'
import { Route, Routes } from 'react-router'
import SearchBar from '../Components/SearchBar'
import Testing from '../Components/Testing'
import FoodRecipe from '../Components/FoodRecipe'


export default function RouttingComp() {
  return (
    <>
        <Routes>
            <Route path='/' element={<SearchBar />} />
            <Route path='/FoodRecipe' element={<FoodRecipe />} />
            <Route path='/Testing' element={<Testing />} />
        </Routes>
    </>
  )
}

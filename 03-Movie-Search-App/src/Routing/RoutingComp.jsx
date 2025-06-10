import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router"
import MovieInfo from '../Components/MovieInfo'
import SearchBar from '../Components/SearchBar'
import Testing from '../Components/Testing'

export default function RoutingComp() {


  return (
    <>
   
            <Routes>
                <Route path="/" element={<SearchBar />}/>
                <Route path="/MovieInfo" element={<MovieInfo/>} />
                <Route path="/Testing" element={<Testing/>} />
                {/* <Route path='/Testing' element={<Testing />}/> */}
            </Routes>
    </>
  )
}

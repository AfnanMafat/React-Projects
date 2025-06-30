import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import QuizQuestions from '../Components/QuizQuestions'
import Register from '../Components/Register'
import Thanks from '../Components/Thanks'

export default function RoutingComp() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/Quiz' element={<QuizQuestions />} />
            <Route path="/Register" element={<Register />} />
            <Route path='/Score' element={<Thanks />} />
        </Routes>
    </>
  )
}

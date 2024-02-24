import React from 'react'
import { Home, Meal } from './pages'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='meals/:mealId' element={<Meal />} />
      </Routes>
    </>
  )
}

export default App

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from '../../Pages/Homepage'
import Admin from '../../Pages/Admin'
///import de toutes les pages

function Router() {
  return (
    //  toutes les route sont a programer ici

    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default Router

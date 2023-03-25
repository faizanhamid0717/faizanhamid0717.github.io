import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './about/About'
import Contact from './contact/Contact'
import Hero from './hero/Hero'
import { Project } from './projects/Project'
import Skills from './skills/Skills'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Hero/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/skills' element={<Skills/>}></Route>
            <Route path='/projects' element={<Project/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    </div>
  )
}

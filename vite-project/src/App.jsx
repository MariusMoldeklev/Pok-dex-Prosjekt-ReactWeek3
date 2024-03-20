import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import './App.css'
import { Layout } from './pages/Layout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/about/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Vi starter med en "/" her som gjør at dette blir en absolut filsti */}
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* Side vi ikke starter med en "/" så blir dette en relative url som tar med parents path verdi */}
          {/* path blir her parent route + this path => "/" + "about" = "/about" */}
          <Route path='about' element={<AboutPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

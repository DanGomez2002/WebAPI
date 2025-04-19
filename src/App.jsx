import './App.css'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import PaginaInicio from './Pages/PaginaInicio/PaginaInicio'
import PaginaFiltro from './Pages/PaginaFiltro/PaginaFiltro'
import PaginaDetalles from './Pages/PaginaDetalles/PaginaDetalles'
import PaginaError from './Pages/PaginaAbout/PaginaAbout'
import PaginaAbout from './Pages/PaginaError/PaginaError'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<PaginaInicio />} />
          <Route path='/filter/:genero' element={<PaginaFiltro />} />
          <Route path='/details/:id' element={<PaginaDetalles />} />
          <Route path='/about' element={<PaginaAbout />} />
          <Route path='*' element={<PaginaError />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      

    </>
  )
}

export default App
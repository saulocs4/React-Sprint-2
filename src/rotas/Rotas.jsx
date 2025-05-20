import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { PageCarrinho } from '../pages/PageCarrinho'

const Rotas = () => {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='carrinho' element={<PageCarrinho/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Rotas
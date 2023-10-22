import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Index from './pages/Index'
import ShoppingCart from './pages/ShoppingCart'
import ViewProduct from './pages/ViewProduct'
import CartProvider from './contextCart'

const App = () => {
  return (
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/'   element={<Index/>}/>
              <Route path="product/:id" element={<ViewProduct/>} />
            <Route path='/carrito'  element={<ShoppingCart/>} />
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    
  )
    

}

export default App

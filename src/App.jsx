import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProductView from './views/ProductView'
import IndexView from './views/IndexView'
import CartView from './views/CartView'
import EditProductView from "./views/EditProductsView"
import ProductsProvider from './contexts/productContext'
import CartProvider from './contexts/CartContext'
import FavoritesView from './views/FavoritesView'
import FavoritesProvider from './contexts/FavoritesContext'
import Login from "./components/Login"
import Register from "./components/Register"
import AuthProvider from './contexts/authContext'
import { ProtectedRoute } from './components/ProtectedRoute'
const App = () => {
  return (
      <BrowserRouter>
        <AuthProvider>
          <ProductsProvider>
            <CartProvider>
              <FavoritesProvider>
                <Navbar/>
                <Routes>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/register' element={<Register/>}/>
                  <Route path='/'   element={<IndexView/>}/>
                    <Route path="product/:id" element={<ProductView/>} />
                  <Route path='/carrito'  element={<ProtectedRoute><CartView/></ProtectedRoute>} />
                  <Route path='/editProducts'  element={<ProtectedRoute><EditProductView/></ProtectedRoute>} />
                  <Route path='/favorites'  element={<ProtectedRoute><FavoritesView/></ProtectedRoute>} />
                </Routes>
                <Footer/>
              </FavoritesProvider>
            </CartProvider>
          </ProductsProvider>
        </AuthProvider>
      </BrowserRouter>
    
  )
    

}

export default App

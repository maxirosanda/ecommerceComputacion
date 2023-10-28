import './index.css'
import { useContext } from 'react'
import ProductsContainer from "../../containers/ProductsContainer"
import { AuthContext } from '../../contexts/authContext' 
import { useNavigate } from 'react-router-dom'
const Index = () => {
    const [user,,,logout] = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
          await logout()
          navigate("/login")
        } catch (error) {
          console.error(error.message)
        }
      }
    return(
        <>
        <button onClick={handleLogout}>Logout</button>
         <ProductsContainer/>
        </>
       
    )
}

export default Index
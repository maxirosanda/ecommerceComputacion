import { useState,useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'
import { useNavigate } from 'react-router-dom'
import './index.css'


const Index = () =>{

    const [,sigup] = useContext(AuthContext)
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const [error,setError] = useState("")
    const navigate = useNavigate()

    const handleChange = ({target:{name,value}}) => {
        setUser({...user,[name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
          await sigup(user.email,user.password)
          navigate("/")
        } catch (error) {
            console.log(error.code)
            if(error.code == "auth/invalid-email") setError("correo invalido")
            //setError(error.message)
        }
       
        
  
    }

    return (
    <div>
        <h1>Register</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <input type="email"  name="email" placeholder='Ingrese su email' onChange={handleChange} required />
            <input type="password" name="password" placeholder='Ingrese su password' onChange={handleChange} required />
            <button type="submit">Registrarse</button>
        </form>
    </div>
    )
}

export default Index
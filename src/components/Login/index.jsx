import { useState,useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'
import { useNavigate } from 'react-router-dom'
import './index.css'


const Index = () =>{

    const [,,login,,loginWithGoogle,resetPassword] = useContext(AuthContext)
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
          await login(user.email,user.password)
          navigate("/")
        } catch (error) {
            console.log(error.code)
            if(error.code == "auth/invalid-email") setError("correo invalido")
            //setError(error.message)
        }
    }
    const handleGoogleSignin = async () => {
        try {
          await loginWithGoogle()
          navigate("/")
        } catch (error) {
          setError(error.message)
        }
      }

    const handleResetPassword = async (e) => {
        e.preventDefault()
        if (!user.email) return setError("Write an email to reset password")
        try {
          await resetPassword(user.email)
          setError('We sent you an email. Check your inbox')
        } catch (error) {
          setError(error.message)
        }
    }

    return (
    <div>
        <h1>Ingresar</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <input type="email"  name="email" placeholder='Ingrese su email' onChange={handleChange} required />
            <input type="password" name="password" placeholder='Ingrese su password' onChange={handleChange} required />
            <button type="submit">Ingresar</button>
            <button onChange={handleGoogleSignin}>Login con Google</button>
            <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#!"
            onClick={handleResetPassword}
          >
            Forgot Password?
          </a>
        </form>
    </div>
    )
}

export default Index
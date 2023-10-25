import './index.css'
import { NavLink } from "react-router-dom"

const Index = ({text,to}) =>{
    return(
        <NavLink className="NavLink" to={to}>{text}</NavLink>
    )
}

export default Index
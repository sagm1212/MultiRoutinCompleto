import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Context from '../contexto/Context'

const NavBar = () => {
  const navegacion=useNavigate()
  const {deslogearse} =useContext(Context)
  const logout = () =>{
    deslogearse();
    navegacion('/login',{replace:true})
  }
  return (
    <>
    <nav>
      <div>
        <NavLink to="/cp"> Capital y Patagonia </NavLink>
        <NavLink to="/no"> Norte y Este </NavLink>
        <NavLink to="/viaje"> mi viaje </NavLink>
      </div>
      <button onClick={logout}>Logout</button>
     </nav>
    </>
  )
}

export default NavBar

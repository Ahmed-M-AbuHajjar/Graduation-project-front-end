import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';


export const Header = () => {
  

  

  const navigate  = useNavigate();
  function mybtn(){
      
    localStorage.removeItem('user')
    navigate(window.location.pathname)
}

    
  
  return (
    <>
      <header id='header' className='alt'>
        <div className='logo'>
          <NavLink to='/Home'>
            <strong>Car Dealer</strong> <span>Website</span>
          </NavLink>
        </div>

        <nav>
          {localStorage.getItem('user') !== null ? (
          <>
          <NavLink id="logout" onClick={mybtn}>logout</NavLink>
          {JSON.parse(localStorage.getItem('user')).foundedUser.role == "Admin" ? (
           
            <NavLink id="admin" to="/Admin">Admin Panel</NavLink>
          
          ): <></>}
          
          </>
          ) : <></>}
          <a href='#menu'>Menu</a>
        </nav>
      </header>
      <nav id='menu'>
        <ul className='links text-center'>
          <li key={"navLinks"}>
            <NavLink to='/Home'>Home</NavLink>
            <NavLink to='/Signup'>Signup</NavLink>
            <NavLink to='/Login'>Login</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

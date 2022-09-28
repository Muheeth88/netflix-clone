import React, { useEffect, useState } from 'react';
import "./Nav.css"

const Nav = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null)
    };
  }, []);

  return (
    <div className = {`nav ${show && "nav_black"}`}>
        <img className='nav_logo' src='./netflix_logo_svg.png' alt='Netflix Logo'></img>
        <img className='nav_avatar' src='./netflix-avatar.png' alt='Netflix Avatar'></img>
    </div>
  )
}

export default Nav
import React, { useState, useRef, useEffect } from 'react'
import './Navigation.css'

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        btnRef.current &&
        !btnRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className='navigation'>
      <a href='#' className='logo'>MyPortfolio</a>
      <ul ref={menuRef} className={open ? 'active' : ''}>
        <li><a href='#home' className='nav-link' onClick={() => setOpen(false)}>Home</a></li>
        <li><a href='#summary' className='nav-link' onClick={() => setOpen(false)}>Skill</a></li>
        <li><a href='#projects' className='nav-link' onClick={() => setOpen(false)}>Project</a></li>
        <li><a href='#education' className='nav-link' onClick={() => setOpen(false)}>Education</a></li>
        <li><a href='#activities' className='nav-link' onClick={() => setOpen(false)}>Activity</a></li>
        <li><a href='#contact' className='nav-link' onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
      <button
        ref={btnRef}
        className='toggle-btn'
        onClick={() => setOpen(!open)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </nav>
  )
}

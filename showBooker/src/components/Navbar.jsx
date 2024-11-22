import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const Navbar = () => {

    const navigate=useNavigate()
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li onClick={()=>{navigate("/")}} style={styles.navItem}>
            <span style={styles.navLink}>Home</span>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'black',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    cursor:"pointer"
  },
};

export default Navbar;

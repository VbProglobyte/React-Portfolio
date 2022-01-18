import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import './styles/Navbar.css';

const styles = {
  navbarStyle: {
    background: 'black',
    justifyContent: 'flex-end',
  },
};

function Navbar() {
 
  return (
    <nav style={styles.navbarStyle} className="navbar">
        {/* <nav class="navbar is-link is-fixed-top"> */}
            <div class="navbar-brand">
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

     <a href="https://github.com/VbProglobyte">GitHub</a>
            <a href="https://www.linkedin.com/in/valerie-brisendine-b53238a3/  ">LinkedIn</a>
            <a href="https://www.behance.net/vsbrisendib0ab">behance</a>
            <a href="http://valerie-brisendine-08fs.squarespace.com/">personal website</a>
            <a href="https://docs.google.com/document/d/e/2PACX-1vRhRxY1eQ2kPj8rLQR-dXqy4GMVzKCGc6WB6cJjgsOs1iCQrgQcaY-sn3a-GE6p0clskxAWHOvcH8bD/pub">resume</a>

    </nav>
  );
}

export default Navbar;

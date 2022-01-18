import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import './styles/Header.css';

const styles = {
  headerStyle: {
    background: 'black',
  },
  headingStyle: {
    fontSize: '100px',
  },
};

function Header() {


  return (
    <header style={styles.headerStyle} className="header">
      {/* <h1 style={styles.headingStyle}>Welcome</h1> */}
      <div class="head">
        <h1>VSBrisendine</h1>
      </div>
      <div class="sub">
        <p>Full Stack Developer /
          / Designer : Web | Print </p>
      </div>
      
    </header>
  );
}

export default Header;
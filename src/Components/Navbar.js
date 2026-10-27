import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <img src="../img/wiki.png" alt="" height="30px" width="30px" />
        <a className="navbar-brand mx-3" href="/">{props.title}</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="/" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >                                 
                
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                {/* Note: In JSX, the hr tag must be self-closed */}
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true" href="/">Disabled</a>
            </li>
          </ul>
          
          
  <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" value="" id="switchMdLabel" role="switch" switch="true"/>
    <label htmlFor="switchMdLabel" className="text-light">Dark Mode</label>
  </div>

          
          <form className="d-flex mx-3" role="search">
            <input 
              className="form-control" 
              type="search" 
              placeholder="Search" 
              aria-label="Search" 
            />
            <button className="btn btn-outline-success mx-3" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

//
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  btnCaption: PropTypes.string
}

Navbar.defaultProps = {
  title: "Set Title Here",
  btnCaption: "Set Button Caption"
}

export default Navbar;
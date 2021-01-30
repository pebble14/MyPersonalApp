import React from "react"

function MyNavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="index.html">MyApp</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="index.htmlnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="index.html">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Health
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="index.html">Action</a>
          <a className="dropdown-item" href="index.html">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="index.html">Something else here</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Academics
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="index.html">Action</a>
          <a className="dropdown-item" href="index.html">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="index.html">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
  </nav>
    )
  }

  export default MyNavBar
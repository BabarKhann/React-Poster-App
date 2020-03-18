import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="mb-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/posts">Posts</Link>
              </li>
              <li>
                <Link className="nav-link" to="/albums">Albums</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;
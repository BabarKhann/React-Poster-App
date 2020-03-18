import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {

  state = {
    users: [],
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState((prevState) => ({
          users
        }));
      })
      .catch((err) => console.log(err));
  }

  render() {
    const cardWidth = {
      width: "540px"
    }

    return (
      <div className="mt-4">
        {
          this.state.users.map((user) => (
            <div className="card mb-3" style={cardWidth} key={user.id}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="https://via.placeholder.com/179x250" className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.phone}</p>
                    <p className="card-text">{user.email}</p>
                    <p className="card-text">{user.website}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        <Link to={`/users/${user.id}`}>
                          view details ->
                        </Link>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Users;
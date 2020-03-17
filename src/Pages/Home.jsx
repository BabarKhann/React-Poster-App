import React from 'react'
import { Route, Link } from 'react-router-dom';
import Users from './Users';

const Home = () => {
  return (
    <div className="container">
      <div className="mt-4">
        <Users />
      </div>
    </div >
  )
}

export default Home

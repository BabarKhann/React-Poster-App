import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Users from './Pages/Users';
import UserDetails from './Pages/UserDetails';
import Posts from './Pages/Posts';
import Albums from './Pages/Albums';

import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/users" component={Users} exact />
          <Route path="/users/:userId" component={UserDetails} />
          <Route path="/posts" component={Posts} />
          <Route path="/albums" component={Albums} />
        </Switch>
      </div>
    </div>
  );
}

export default App;


    // import React from 'react';
    // import logo from './logo.svg';
    // import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
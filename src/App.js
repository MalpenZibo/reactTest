import React from 'react';
import './App.css';
import 'wired-elements'
import {NavLink, Route} from 'react-router-dom'
import Search from './pages/Search'
import About from './pages/About'
import Users from './pages/Users'

function App() {
  const routes = [
    { path: "/", display: "Search", component: Search},
    { path: "/user", display: "User", component: Users},
    { path: "/about", display: "About", component: About},
  ]

  const menuVoices = routes.map((route) => {
    return (
      <li key={route.path}><NavLink exact to={route.path}><wired-link href="/">{route.display}</wired-link></NavLink></li>
    )
  })

  const routeComponents = routes.map((route) => {
    return (
      <Route key={route.path} exact path={route.path} component={route.component}/>
    )
  })

  return (
    <div>
      <div className="header">
        <h1>React Test</h1>
        <wired-divider></wired-divider>
      </div>
      <div className="container">
        <div className="menu">
          <ul>
            {menuVoices}
          </ul>
        </div>
        <div className="content">
          {routeComponents}
        </div>
      </div>
    </div>
  );
}

export default App;

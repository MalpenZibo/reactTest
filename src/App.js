import React, { createRef, useEffect } from 'react';
import './App.css';
import 'papercss/dist/paper.min.css'
import { NavLink, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import Search from './pages/Search'
import About from './pages/About'
import Users from './pages/Users'

function App(props) {
  const routes = [
    { path: "/", display: "Search", component: Search},
    { path: "/user", display: "User", component: Users},
    { path: "/about", display: "About", component: About},
  ]

  const menuRef = createRef()

  const menuVoices = routes.map((route) => {
    return (
      <li key={route.path}><NavLink exact to={route.path}>{route.display}</NavLink></li>
    )
  })

  const routeComponents = routes.map((route) => {
    return (
      <Route key={route.path} exact path={route.path} component={route.component}/>
    )
  })

  useEffect(() => {
    let unlisten = props.history.listen((location, action) => {
      menuRef.current.checked = false
    });

    // return cleanup
    return () => {
      unlisten()
    }
  })

  return (
    <div>
      <nav className="fixed split-nav">
        <div className="nav-brand">
          <h3>React Test</h3>
        </div>
        <div className="collapsible">
          <input id="collapsible1" type="checkbox" name="collapsible" ref={menuRef} />
          <button>
            <label htmlFor="collapsible1">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </label>
          </button>
          <div className="collapsible-body">
            <ul className="inline">
              {menuVoices}
            </ul>
          </div>
        </div>
      </nav>  

      <div className="content">
        {routeComponents}
      </div>
    </div>
  );
}

export default withRouter(App);

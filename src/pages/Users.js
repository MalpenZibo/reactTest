import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './User.css';

export default function UserPage(props) {
  const wLinkBugFix = React.createRef()

  // Setting initial state
  const initialUserState = {
    user: {},
    loading: true,
  }

  // Getter and setter for user state
  const [user, setUser] = useState(initialUserState)

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios(`https://api.github.com/users/malpenzibo`)

      // Update state
      setUser(data)
    }

    // Invoke the async function
    getUser()
  }, []) // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop

  useEffect(() => {    
    if(wLinkBugFix.current != null)
      wLinkBugFix.current.requestUpdate();
  })

  // Return a table with some data from the API.
  return user.loading ? (
    <wired-spinner spinning ></wired-spinner>
  ) : (
    <wired-card>
      <div className="userCard">
        <wired-image elevation="4" src={user.avatar_url}></wired-image>
        <div>
          <h3>{user.login}</h3>
          <div>
            <span>Name:</span>
            <span>{user.name}</span>
          </div>
          <div>
            <span>WebSite:</span>
            <span><wired-link ref={wLinkBugFix} href={user.blog}>{user.blog}</wired-link></span>
          </div>
          <div>
            <span>Followers:</span>
            <span>{user.followers}</span>
          </div>
        </div>        
      </div>
      
    </wired-card>
  )
}
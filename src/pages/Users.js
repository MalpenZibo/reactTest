import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './User.css';
import WaitProgress from '../components/WaitProgress'

export default function UserPage() {
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

  return user.loading ? (
    <WaitProgress />
  ) : (
    <div className="user-content">
      <img src={user.avatar_url} alt="avatar" className="float-left" ></img>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">{user.login}</h4>
        </div>
        <div className="card-body">
          <div>
            <span>Name:</span>
            <span>{user.name}</span>
          </div>
          <div>
            <span>WebSite:</span>
            <span><a href={user.blog}>{user.blog}</a></span>
          </div>
          <div>
            <span>Followers:</span>
            <span>{user.followers}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
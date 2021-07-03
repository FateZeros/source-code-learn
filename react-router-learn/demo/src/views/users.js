import React, { Fragment } from 'react'
// import { Link, Route } from '../mini-react-router'
import { Link, Route } from 'react-router-dom'

function User(props) {
  const { match = {} } = props
  return <div>userId - {match.params.id}</div>
}

function Users() {
  return (
    <Fragment>
      <h2>Users</h2>
      <h3>
        <Link to="/user/1">user1</Link>
      </h3>
      <h3>
        <Link to="/user/2">user2</Link>
      </h3>

      <Route path="/user/:id" component={User} />
    </Fragment>
  )
}

export default Users

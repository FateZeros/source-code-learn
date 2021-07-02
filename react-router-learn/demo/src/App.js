import './app.css'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
  Link
} from './mini-react-router'
import Home from './views/home'
import About from './views/about'
import Users from './views/users'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="header">
            <li className="mr40">
              <Link to="/">Home</Link>
            </li>
            <li className="mr40">
              <Link to="/about">About</Link>
            </li>
            <li className="mr40">
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route
            path="/about"
            children={() => <div>About-children</div>}
            component={About}
            render={() => <div>About-render</div>}
          />
          <Route path="/users" component={Users} />
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

import { Component } from 'react'
import { Router } from '../react-router'
import { createBrowserHistory as createHistory } from '../history'

class BrowserRouter extends Component {
  history = createHistory(this.props)

  render() {
    return <Router history={this.history} children={this.props.children} />
  }
}

export default BrowserRouter

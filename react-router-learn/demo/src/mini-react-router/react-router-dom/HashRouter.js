import { Component } from 'react'
import { Router } from '../react-router'
import { createHashHistory as createHistory } from 'history'

class HashRouter extends Component {
  history = createHistory(this.props)

  render() {
    return <Router history={this.history} children={this.props.children} />
  }
}

export default HashRouter

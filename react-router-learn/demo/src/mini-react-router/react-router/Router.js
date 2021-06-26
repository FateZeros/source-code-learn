import React, { Component } from 'react'

import HistoryContext from './HistoryContext.js'
import RouterContext from './RouterContext.js'

class Router extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: props.history.location
    }
  }

  render() {
    return (
      <RouterContext.Provider
        value={{
          history: this.props.history,
          location: this.state.location
        }}
      >
        <HistoryContext.Provider
          value={this.props.history}
          children={this.props.children || null}
        />
      </RouterContext.Provider>
    )
  }
}

export default Router

import React, { Component } from 'react'

import HistoryContext from './HistoryContext.js'
import RouterContext from './RouterContext.js'

/**
 * Router
 * RouterContext
 * HistoryContext
 *
 * Can't call setState on a component that is not yet mounted
 * 要确认组件是否已挂载
 */
class Router extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: props.history.location
    }
    this._isMounted = false

    this.historyUnlistener = props.history.listen(location => {
      if (this._isMounted) {
        this.setState({ location })
      }
    })
  }

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
    this.historyUnlistener()
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

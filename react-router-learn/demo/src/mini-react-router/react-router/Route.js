import React, { Component } from 'react'
import RouterContext from './RouterContext.js'

class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          console.log(context, '===== Route.js =====')
          const props = { ...context }
          const { children } = this.props

          return (
            <RouterContext.Provider value={props}>
              {children}
            </RouterContext.Provider>
          )
        }}
      </RouterContext.Consumer>
    )
  }
}

export default Route

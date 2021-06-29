import React, { Component } from 'react'
import RouterContext from './RouterContext.js'

/**
 * Route
 * 3种方式
 * <Route path=""><Component /></Route>
 * <Route path="" component={} />
 * <Route render={} />
 *
 * props: from to exact component
 */
class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          // console.log(context, '===== Route.js =====')
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

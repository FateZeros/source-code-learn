import React, { Component } from 'react'
import RouterContext from './RouterContext.js'

/**
 * Route
 * 3种方式 优先级
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
          const { children, component, render } = this.props
          // console.log(children, component, render, 1111)

          /**
           * route 渲染逻辑
           * 1. children > component > render
           */
          return (
            <RouterContext.Provider value={props}>
              {children
                ? typeof children === 'function'
                  ? children(props)
                  : children
                : component
                ? React.createElement(component, props)
                : render
                ? render(props)
                : null}
            </RouterContext.Provider>
          )
        }}
      </RouterContext.Consumer>
    )
  }
}

export default Route

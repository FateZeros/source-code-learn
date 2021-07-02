import React, { Component } from 'react'
import RouterContext from './RouterContext.js'
import matchPath from './matchPath.js'

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
          console.log(this.props, '===== Route props =====')
          const location = this.props.location || context.location

          const {
            children,
            component,
            render,
            computedMatch,
            path
          } = this.props

          /**
           * 路由是否匹配
           *
           */
          const match = computedMatch
            ? computedMatch
            : path
            ? matchPath(location.pathname, this.props)
            : context.match
          console.log(match, '==== Route.js match ===')

          const props = { ...context, location, match }

          /**
           * 1. 先判断是否 match
           * 2. route 渲染逻辑
           *    children > component > render
           *    children: fn、对象数组
           */
          return (
            <RouterContext.Provider value={props}>
              {props.match
                ? children
                  ? typeof children === 'function'
                    ? children(props)
                    : children
                  : component
                  ? React.createElement(component, props)
                  : render
                  ? render(props)
                  : null
                : null}
            </RouterContext.Provider>
          )
        }}
      </RouterContext.Consumer>
    )
  }
}

export default Route

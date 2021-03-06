import React, { Component } from 'react'

import RouterContext from './RouterContext'
import matchPath from './matchPath'

/**
 * Switch
 * 匹配路由渲染 route 实现 SPA
 */
class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          // console.log(context, '--- Switch ---')
          const location = this.props.location || context.location
          let element = null
          let match = null
          /*
           * React.Children
           * https://reactjs.org/docs/react-api.html#reactchildren
           * React.Children.forEach(children, function[(thisArg)])
           */
          React.Children.forEach(this.props.children, child => {
            if (match === null && React.isValidElement(child)) {
              // console.log(child.props, '--- route child props ------')
              element = child
              const path = child.props.path || child.props.from
              // console.log(
              //   path,
              //   location.pathname,
              //   matchPath(location.pathname, child.props),
              //   '--- Switch matchPath ---'
              // )
              match = path
                ? matchPath(location.pathname, child.props)
                : context.match
            }
          })
          // console.log(match, '---- switch match----')
          return match
            ? React.cloneElement(element, { location, computedMatch: match })
            : null
        }}
      </RouterContext.Consumer>
    )
  }
}

export default Switch

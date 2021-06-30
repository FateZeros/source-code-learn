import React from 'react'
import RouterContext from '../react-router/RouterContext'

/**
 * Link a标签点击跳转路由
 */
class Link extends React.Component {
  static contextType = RouterContext

  handleLinkClick = e => {
    e.preventDefault()
    // this.props.history.push()
    this.context.history.push(this.props.to)
  }

  render() {
    const { to, children, ...restProps } = this.props

    return (
      <a href={to} {...restProps} onClick={this.handleLinkClick}>
        {children}
      </a>
    )
  }
}

export default Link

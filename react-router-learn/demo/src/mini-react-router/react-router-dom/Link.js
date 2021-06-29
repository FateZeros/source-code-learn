import React from 'react'
import RouterContext from '../react-router/RouterContext'

/**
 * Link a标签点击跳转路由
 */
class Link extends React.Component {
  static contextType = RouterContext

  handleLinkClick = e => {
    e.preventDefault()
    console.log(this.context, 22)
    // this.props.history.push()
    this.context.history.push(this.props.to)
  }

  render() {
    const { to, children } = this.props

    return (
      <a href={to} onClick={this.handleLinkClick}>
        {children}
      </a>
    )
  }
}

export default Link

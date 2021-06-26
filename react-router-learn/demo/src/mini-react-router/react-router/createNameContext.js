import React from 'react'

const createNamedContext = name => {
  const context = React.createContext()
  context.displayName = name

  return context
}

export default createNamedContext

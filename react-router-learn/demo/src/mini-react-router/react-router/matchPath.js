import { pathToRegexp } from 'path-to-regexp'

function compilePath(path, options) {
  const keys = []
  const regexp = pathToRegexp(path, keys, options)
  // console.log(regexp, '=== compilePath ===')
  const result = { regexp, keys }
  return result
}

/**
 * 匹配 location pathname & route props
 * @param {*} pathname
 * @param {*} options
 */
function matchPath(pathname, options = {}) {
  const { path } = options

  const paths = [].concat(path)

  return paths.reduce((matched, path) => {
    // console.log(matched, path, '------ route matchPath ------')
    // 如果 route path !== null && path !== undefined
    if (!path && path !== '') return null
    if (matched) return matched

    const { regexp } = compilePath(path, {})
    const match = regexp.exec(pathname)

    if (!match) return null

    const [url] = match
    const isExact = pathname === url

    return {
      path,
      url: path === '/' && url === '' ? '/' : url,
      isExact
    }
  }, null)
}

export default matchPath

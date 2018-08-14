import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  link: {
    color: '#008bff',
    textDecoration: 'none',
    ':hover': {
      color: '#0056b3',
      textDecoration: 'underline'
    }
  }
})

const SmartLink = ({ children, alt, href, className, target }) => {
  const cssClassName = className
    ? css(styles.link, className)
    : css(styles.link)

  if (href.startsWith('/')) {
    return (
      <Link to={href} className={cssClassName} alt={alt}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      alt={alt}
      className={cssClassName}
    >
      {children}
    </a>
  )
}

SmartLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.object,
  alt: PropTypes.string,
  target: PropTypes.string
}

SmartLink.defaultProps = {
  className: undefined,
  alt: undefined,
  target: '_blank'
}

export default SmartLink

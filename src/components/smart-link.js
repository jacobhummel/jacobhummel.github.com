import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  link: {
    color: '#007bff',
    textDecoration: 'none',
    ':hover': {
      color: '#0056b3',
      textDecoration: 'underline'
    }
  }
})

const SmartLink = ({ children, alt, href, className, target }) => {
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={`${css(styles.link)} ${className}`} alt={alt}>
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
      className={`${css(styles.link)} ${className}`}
    >
      {children}
    </a>
  )
}

SmartLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
  target: PropTypes.string
}

SmartLink.defaultProps = {
  className: '',
  alt: undefined,
  target: '_blank'
}

export default SmartLink

import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'
import SmartLink from './smart-link'

const styles = StyleSheet.create({
  section: {
    paddingBottom: '10vh'
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50
  },
  title: {
    marginBottom: 0
  }
})

const Section = ({ children, title, link }) => {
  return (
    <section className={css(styles.section)}>
      <div className={css(styles.head)}>
        {title && <h2 className={css(styles.title)}>{title}</h2>}
        {link && <SmartLink href={link.href}>{link.text}</SmartLink>}
      </div>
      {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
}

Section.defaultProps = {
  title: undefined,
  link: undefined
}

export default Section

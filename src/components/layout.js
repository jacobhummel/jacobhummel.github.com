import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff'
  },
  container: {
    margin: '0 auto',
    maxWidth: 825,
    padding: '0px 1.0875rem 1.45rem',
    paddingTop: 0
  }
})

const Layout = ({ children, fullWidth, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={css(styles.body)}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        >
          <html lang='en' />
        </Helmet>
        <div className={css(styles.container)}>{children}</div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool
}

Layout.defaultProps = {
  fullWidth: false
}

export default Layout

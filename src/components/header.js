import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'column',
    padding: '15vh 0'
  },
  headshot: {
    borderRadius: '50%',
    width: 175,
    height: 175,
    border: '5px solid #f5f5f5',
    boxShadow: ''
  },
  intro: {
    fontWeight: 'normal',
    lineHeight: '2rem'
  }
})

const Header = ({ children, headshot }) => (
  <div className={css(styles.header)}>
    <img alt='headshot' src={headshot} className={css(styles.headshot)} />
    <h1 className={css(styles.intro)}>{children}</h1>
  </div>
)

export default Header

import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

import globals from '../utils/globals'
import SmartLink from './smart-link'

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none'
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    color: globals.color.text
  }
})

const SkillItem = ({ skill }) => {
  return (
    <SmartLink
      className={css(styles.item)}
      href={skill.link ? skill.link : '/'}
    >
      <img
        src={skill.icon}
        className={css(styles.icon)}
        alt={`${skill.name} logo`}
      />
      <div className={css(styles.text)}>{skill.name}</div>
    </SmartLink>
  )
}

SkillItem.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    link: PropTypes.string
  }).isRequired
}

export default SkillItem

import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

import SmartLink from './smart-link'

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    textDecoration: 'none'
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
    marginRight: 20
  },
  info: {
    flex: 1
  },
  name: {
    marginBottom: 2
  },
  role: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    flex: 1,
    fontSize: 14,
    marginBottom: 20
  },
  duration: {
    textTransform: 'uppercase',
    fontSize: 12,
    textAlign: 'right'
  },
  description: {
    fontSize: 14,
    '@media screen and (min-width: 40em)': {
      textAlign: 'justify'
    }
  }
})

const ExperienceItem = ({ experience }) => {
  return (
    <div className={css(styles.item)}>
      <img
        src={experience.icon}
        className={css(styles.icon)}
        alt={`${experience.name} logo`}
      />
      <div className={css(styles.info)}>
        <div className={css(styles.role)}>
          <SmartLink href={experience.link} className={css(styles.name)}>
            {experience.name}
          </SmartLink>
          <div className={css(styles.duration)}>{experience.duration}</div>
        </div>
        <div className={css(styles.title)}>{experience.title}</div>
        <div className={css(styles.description)}>{experience.description}</div>
      </div>
    </div>
  )
}

ExperienceItem.propTypes = {
  experience: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired
}

export default ExperienceItem

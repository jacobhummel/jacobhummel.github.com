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
  },
  bullets: {
    fontSize: 14
  },
  bullet: {
    marginBottom: 2
  }
})

const ExperienceItem = ({ experience }) => {
  const { icon, name, title, link, duration, description, bullets } = experience

  return (
    <div className={css(styles.item)}>
      <img src={icon} className={css(styles.icon)} alt={`${name} logo`} />
      <div className={css(styles.info)}>
        <div className={css(styles.role)}>
          <SmartLink href={link} className={styles.name}>
            {name}
          </SmartLink>
          <div className={css(styles.duration)}>{duration}</div>
        </div>
        <div className={css(styles.title)}>{title}</div>
        {description && (
          <div className={css(styles.description)}>{description}</div>
        )}
        {bullets && (
          <ul className={css(styles.bullets)}>
            {bullets.map(bullet => (
              <li className={css(styles.bullet)}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

ExperienceItem.propTypes = {
  experience: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    bullets: PropTypes.array
  }).isRequired
}

export default ExperienceItem

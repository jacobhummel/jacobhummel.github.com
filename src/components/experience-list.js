import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

import ExperienceItem from '../components/experience-item'

const styles = StyleSheet.create({
  list: {
    marginBottom: 50
  }
})

const ExperienceList = ({ title, experiences }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className={css(styles.list)}>
        {experiences.map(experience => (
          <ExperienceItem key={experience.name} experience={experience} />
        ))}
      </div>
    </div>
  )
}

ExperienceList.propTypes = {
  title: PropTypes.string.isRequired,
  experiences: PropTypes.array.isRequired
}

export default ExperienceList

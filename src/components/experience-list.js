import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

import ExperienceItem from '../components/experience-item'

const styles = StyleSheet.create({
  list: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: 50,
    marginBottom: 50,
    '@media screen and (min-width: 40em)': {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  }
})

const ExperienceList = ({ title, experiences }) => {
  return (
    <div>
      <h4>{title}</h4>
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

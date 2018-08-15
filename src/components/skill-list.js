import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

import SkillItem from '../components/skill-item'

const styles = StyleSheet.create({
  list: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: 30,
    marginBottom: 50,
    '@media screen and (min-width: 40em)': {
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr'
    }
  }
})

const SkillList = ({ title, skills }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className={css(styles.list)}>
        {skills.map(skill => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

SkillList.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired
}

export default SkillList

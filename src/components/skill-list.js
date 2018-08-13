import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

import SkillItem from '../components/skill-item'

const styles = StyleSheet.create({
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 30,
    marginBottom: 50,
    '@media screen and (min-width: 40em)': {
      gridTemplateColumns: 'repeat(7, 1fr)'
    }
  }
})

const SkillList = ({ title, skills }) => {
  return (
    <div>
      <h4>{title}</h4>
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

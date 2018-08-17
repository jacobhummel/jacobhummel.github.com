import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

import SkillItem from '../components/skill-item'

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 50,
    marginBottom: 10
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

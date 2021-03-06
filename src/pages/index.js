import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Layout from '../components/layout'
import Header from '../components/header'
import SmartLink from '../components/smart-link'
import Section from '../components/section'
import globals from '../utils/globals'

import headshot from '../images/jacob-hummel.jpg'
import SkillList from '../components/skill-list'
import ExperienceList from '../components/experience-list'

import { languages, technologies, workflow } from '../data/skills'
import { work, sideProjects, education } from '../data/experience'

const styles = StyleSheet.create({
  targetLink: {
    color: globals.color.text,
    textDecoration: 'underline',
    textDecorationColor: globals.color.target,
    ':hover': {
      color: globals.color.target
    }
  },
  boogieLink: {
    color: globals.color.text,
    textDecoration: 'underline',
    textDecorationColor: globals.color.boogie,
    ':hover': {
      color: globals.color.boogie
    }
  },
  twoCol: {
    display: 'grid',
    gridTemplateColumns: '50% 50%'
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30
  },
  contactLink: {
    fontSize: 20,
    marginRight: 30
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

const IndexPage = () => (
  <Layout>
    <Header headshot={headshot}>
      <div>
        I'm <strong>Jacob Hummel</strong>, a React/React Native front-end
        software engineer with a UX background. Located in Minneapolis, MN.
      </div>
      <div className={css(styles.contact)}>
        <SmartLink
          href='mailto:jacob@jacobhummel.com'
          alt='Email me'
          target='_self'
          className={styles.contactLink}
        >
          Email
        </SmartLink>
        <SmartLink
          href='https://www.linkedin.com/in/jacobhummel/'
          alt='LinkedIn profile'
          className={styles.contactLink}
        >
          LinkedIn
        </SmartLink>
      </div>
    </Header>
    <Section title='Skills'>
      <SkillList title='Languages' skills={languages} />
      <SkillList
        title='Frameworks, Libraries, and Platforms'
        skills={technologies}
      />
      <SkillList title='Workflow and Tools' skills={workflow} />
    </Section>
    <Section
      title='Experience'
      link={{ href: 'jacobhummel-resume.pdf', text: 'View Resume' }}
    >
      <ExperienceList title='Work' experiences={work} />
      <ExperienceList title='Side Project' experiences={sideProjects} />
      <ExperienceList title='Education' experiences={education} />
    </Section>
    <div className={css(styles.footer)}>
      <div>
        Built with{' '}
        <span role='img' aria-label='coffee'>
          ☕
        </span>{' '}
        and GatsbyJS
      </div>
      <SmartLink
        href='https://github.com/jacobhummel/jacobhummel.github.com'
        alt='GitHub repo'
      >
        See the code
      </SmartLink>
    </div>
  </Layout>
)

export default IndexPage

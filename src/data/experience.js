import IconTarget from '../images/experience/target.jpg'
import IconBoogie from '../images/experience/boogie.png'
import IconVlg from '../images/experience/vlg.png'
import IconThomson from '../images/experience/thomson-reuters.jpg'
import IconEmerson from '../images/experience/emerson.jpg'

import IconIastate from '../images/experience/iastate.jpg'

export const work = [
  {
    name: 'Target',
    title: 'Front-End Engineer',
    duration: 'Mar 2017 - Present',
    icon: IconTarget,
    link: 'https://www.target.com',
    description:
      'Develop internal web portals and reusable components using React, TypeScript, SharePoint Framework, Sass, Azure Functions, and PowerShell.  Establish development standards on an evergreen cloud platform in SharePoint Online. Collaboration with front-end engineers, a UX designer, Accessibility team, product owner, and stakeholders.'
  },
  {
    name: 'Visual Logic',
    title: 'UX Developer',
    duration: 'Jan 2014 - Mar 2017',
    icon: IconVlg,
    link: 'https://vlgux.com',
    description:
      'Developed web and mobile apps in collaboration with UX Designers and clients. Apps varied from prototype to production level. Responsible for all aspects of development including frontend, backend, database, and server. Communicated development constraints to shape product designs.'
  },
  {
    name: 'Thomson Reuters',
    title: 'Technology Intern',
    duration: 'Summer 2013',
    icon: IconThomson,
    link: 'https://www.thomsonreuters.com/en.html',
    description:
      'Full-Stack web developer using the Spring MVC Framework. Added features and improvements to an internal business application.'
  },
  {
    name: 'Emerson Fisher',
    title: 'Web Development Intern',
    duration: 'Summer 2012',
    icon: IconEmerson,
    link: 'http://www.emerson.com/en-us/automation/fisher',
    description:
      'Full-Stack web developer using ASP.NET Web Forms. Rewrote two business critical apps for speed and usability.'
  }
]

export const sideProjects = [
  {
    name: 'Boogie',
    title: 'Co-founder / Mobile Developer',
    duration: 'Aug 2014 - Present',
    icon: IconBoogie,
    link: 'https://boogie.io',
    description:
      "Develop a React Native skydiving logbook app used by thousands of skydivers around the world. App allows users to record their skydives with their phone's altimeter or manually. Collaborate remotely with developers and a designer. Launched the first version in native Android in 2014. Re-wrote for iOS and Android using React Native in 2017."
  }
]

export const education = [
  {
    name: 'Iowa State University',
    title: 'Bachelor of Science in Software Engineering',
    duration: 'Fall 2010 - Spring 2014',
    icon: IconIastate,
    link: 'https://iastate.edu/',
    bullets: [
      '3.46 GPA',
      'Co-founder of HackISU',
      'Webmaster for Computer Science Club',
      'Teaching Assistant for Intro to Object Oriented Programming'
    ]
  }
]

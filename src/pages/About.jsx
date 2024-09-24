import React from 'react'
import PageHeadingReUsable from '../components/PageHeadingReUsable'
import AboutTop from '../components/AboutTop'
import AboutMid from '../components/AboutMid'
import AboutBottom from '../components/AboutBottom'

const About = () => {
  return (
    <>
      <PageHeadingReUsable pagename="About Us"/>
      <AboutTop/>
      <AboutMid/>
      <AboutBottom/>
    </>
  )
}

export default About
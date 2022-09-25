import React from 'react'
import './about.css' ; 
import me from '../../assets/me-about.jpg'
import {FiUsers} from 'react-icons/fi'
import {RiAwardFill} from 'react-icons/ri'
import {VscFolder} from 'react-icons/vsc'
export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiAwardFill className='about__icon'/>
              <h2>Experience</h2>
              <small>2+ years</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h2>Clients</h2>
              <small>200+ Worlwide</small>
            </article>
            <article className='about__card'>
              <VscFolder className='about__icon'/>
              <h2>Project</h2>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores necessitatibus eius molestias deleniti corporis minus architecto, quasi, doloribus, porro minima quisquam laboriosam autem facilis quae? Laboriosam earum assumenda quasi!</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
export default About

import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import JakeCarousel from '../components/Template/Carousel';

import ContactIcons from '../components/Contact/ContactIcons';

import './contactInfo.css';

const Index = () => (
  <Main description={"Jake Martin's personal website"} fullPage>
    <article className="post" id="index">
      <p>
        Hi, I am Jake, a UC Berkeley graduate with a degree in Computer Science.
        I&apos;m passionate about web development
        through which I have experience using frameworks such as React and Node.
        Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <div className="contact-info">
        <header>
          <a href="mailto:jakemartinaus@gmail.com">jakemartinaus@gmail.com</a>
        </header>
        <ContactIcons discardEmail />
      </div>
    </article>
    <JakeCarousel />
  </Main>
);

export default Index;

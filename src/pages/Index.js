import React from 'react';

import Main from '../layouts/Main';
import JakeCarousel from '../components/Template/Carousel';
import ContactIcons from '../components/Contact/ContactIcons';
import './contactInfo.css';

const Index = () => (
  <Main description={"Jake Martin's personal website"}>
    <article className="post" id="index">
      <p>
        Hi, I am Jake, a UC Berkeley graduate with a degree in Computer Science.
        I&apos;m passionate about web development
        through which I have experience using frameworks such as React and Node.
      </p>
      <div className="contact-info">
        <a href="mailto:jakemartinaus@gmail.com">jakemartinaus@gmail.com</a>
        <ContactIcons />
      </div>
    </article>
    <JakeCarousel />
  </Main>
);

export default Index;

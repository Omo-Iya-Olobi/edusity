import React, { useState } from 'react';
import Navbar from './Componenet/Navbar/Navbar';
import Hero from './Componenet/Hero/Hero';
import Programs from './Componenet/Programs/Programs';
import Title from './Componenet/Title/Title';
import About from './Componenet/About/About';
import Institution from './Componenet/Institution/Institution';
import Testimonials from './Componenet/Testimonials/Testimonials';
import Contact from './Componenet/Contact/Contact';
import Footer from './Componenet/Footer/Footer';
import VideoPlay from './Componenet/VideoPlay/VideoPlay';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Programs" title="What We offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subtitle="Gallery" title="Institution photos" />
        <Institution />
        <Title subtitle="Testimonials" title="What Students Says" />
        <Testimonials />
        <Title subtitle="Contact Us" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlay playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;

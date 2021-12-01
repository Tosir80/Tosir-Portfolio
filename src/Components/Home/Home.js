import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import Service from './service/Service';
import Skill from './Skills/Skill';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Service></Service>
            <Project></Project>
            <Contact></Contact>

        </div>
    );
};

export default Home;
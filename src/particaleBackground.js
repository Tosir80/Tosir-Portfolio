import React from 'react';
import Particles  from 'react-particles-js';
import particalesConfig from './Components/config/particale-config';
const particaleBackground = () => {
    return (
        <div>
            <Particles params={particalesConfig}></Particles>
        </div>
    );
};

export default particaleBackground;
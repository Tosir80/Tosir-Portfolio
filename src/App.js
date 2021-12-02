import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Particles from 'react-tsparticles';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Details from './Components/Home/ProjectDetails/Details';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound'
function App() {
   const particlesInit = (main) => {
     console.log(main);

     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
   };

   const particlesLoaded = (container) => {
     console.log(container);
   };
  return (
    <div className='App'>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 100,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#008000',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value:4,
            },
          },
          detectRetina: true,
        }}
      />
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/details/:id' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      <particaleBackground />
    </div>
  );
}

export default App;

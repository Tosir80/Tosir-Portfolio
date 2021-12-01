import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Details from './Components/Home/ProjectDetails/Details';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound'
import particaleBackground from './particaleBackground'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/details/:id' element={ <Details/> } />
          <Route path='*' element={ <NotFound/> } />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      <particaleBackground />
    </div>
  );
}

export default App;

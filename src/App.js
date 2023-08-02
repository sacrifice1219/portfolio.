
import {Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/index' element={ <Home/> } />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact/>} />
      </Routes>
   
  
    
  );
}

export default App;

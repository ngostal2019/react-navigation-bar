import HomePage from './HomePage';
import AboutMe from './AboutMe';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className='App'>
      <nav className='nav' style={{backgroundColor: 'blue', padding: '20px 20px', justifyContent: 'left'}}>
        <Link to={'/'} className='nav-item' style={{marginRight: '100px', textDecoration: 'none', color: 'white'}}>Homepage</Link>
        <Link to={'/about-me'} className='nav-item' style={{marginRight: '100px', textDecoration: 'none', color: 'white'}}>About Me</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;

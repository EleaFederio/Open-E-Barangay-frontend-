import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Sidebar from './components/Sidebar';
import NotFound from './pages/NotFound';
import Residents from './pages/Residents';

function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/residents' element={<Residents/>} />
            <Route path='/about' element={<About/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;

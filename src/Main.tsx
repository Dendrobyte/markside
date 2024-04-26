import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ShibaHome from './emergenshiba/ShibaHome';
import Home from './Home';
import Unavailable from './markside_components/Unavailable';

function Main() {
  return (
    <>
      <header>
          <div className='primary-header banner-bg-image'>
              <div className='header-gray-bg'>
                  <h1 className='dovetail-title header-text'>Markside</h1>
              </div>
          </div>
      </header>
    
      <Router>
        <Routes>

          <Route path="/" Component={Home} />

          <Route path="/not_available" Component={Unavailable} />

          <Route path="/emergenshibe" Component={ShibaHome} />

        </Routes>
      </Router>

      <footer>
          <div className='banner-bg-image'>
              <div className='footer-gray-bg'>
                  <h1 className='footer-text'>
                    This website was designed in Adobe XD and written in React/TypeScript by Mark Bacon (Dendrobyte), 2024.
                  </h1>
              </div>
          </div>
      </footer>
    </>
  );
}

export default Main;

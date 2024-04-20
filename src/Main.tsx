import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import ShibaHome from './emergenshiba/ShibaHome';

function Main() {
  return (
    <Router>
      <Routes>

        <Route path="/" Component={Home} />

        <Route path="/emergenshibe" Component={ShibaHome} />

      </Routes>
    </Router>
  );
}

export default Main;

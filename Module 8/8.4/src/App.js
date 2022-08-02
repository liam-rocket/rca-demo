import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Reading from './pages/Reading';
import AboutUs from './pages/AboutUs';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:id/:test/:name',
    element: <Home />,
  },
  {
    path: '/reading',
    element: <Reading />,
  },
  {
    path: '/about-us',
    element: <AboutUs />,
  },
];

function App() {
  // how to get cookies
  const cookies = document.cookie;
  console.log(cookies);
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

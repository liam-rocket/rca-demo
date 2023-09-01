import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Fruits from './pages/Fruits';
import Register from './pages/Register';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/fruits',
    element: <Fruits />,
  },
  {
    path: '/register',
    element: <Register />,
  },
];

function App() {
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

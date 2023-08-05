import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const AboutMe = React.lazy(() => import('./pages/AboutMe'));

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about-me', // <- localhost:3000/about-me OR https://www.liam.com/about-me
    element: <AboutMe />,
  },
];

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={null}>
        <Router basename="/">
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} exact element={route.element} />
            ))}
          </Routes>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;

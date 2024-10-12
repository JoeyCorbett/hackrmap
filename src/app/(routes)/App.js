// src/App.js
import './App.css'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Form from './form'; 
import Dashboard from './dashboard';
import Learnmore from './learnmore';

function App() {
  return (
    <Router> {/* Wrap your app in the Router */}
      <Routes> {/* Define your routes */}
        <Route path="/" element={(
          <section className="bg-cover bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
              <div className="mx-auto max-w-3xl text-center">
                <h1
                  className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                >
                  <span className="text-5xl"> HackrMap. </span>
                  <span className="sm:block"> Understand flow. </span>
                </h1>

                <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                  Don't know where to start your project? 
                  <div> Hop on and <span> Hack</span></div>
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  {/* Use Link instead of anchor tag */}
                  <Link
                    to="/form" 
                    className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  >
                    Get Started
                  </Link>

                  <a
                    className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
        )} />
        
        <Route path="/form" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/learnmore" element={<Learnmore />} />
      </Routes>
    </Router>
  );
}

export default App;

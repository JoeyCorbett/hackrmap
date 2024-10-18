import './App.css'; 
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Form from './form.jsx'; 
import Dashboard from './dashboard.jsx';
import Learnmore from './learnmore.jsx';
import ManageProject from './manageproject.jsx'; 
import LoadingPage from '../components/loadingPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <section className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden">
              {/* Starry Background */}
              <div className="absolute inset-0 z-0 starry-background"></div>
              
              {/* Main Content */}
              <div className="relative z-10 container mx-auto px-4 py-32 lg:flex lg:h-screen lg:items-center animate-fadeIn">
                <div className="mx-auto max-w-3xl text-center">
                  <h1
                    className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl lg:text-7xl transition duration-500 ease-in-out"
                  >
                    <span className="text-5xl sm:text-6xl lg:text-7xl block mb-4"> HackrMap. </span>
                    <span className="sm:block"> Understand flow. </span>
                  </h1>

                  <p className="mx-auto mt-4 max-w-xl text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed">
                    Don't know where to start your project? 
                    <div> Hop on and <span className="text-white font-bold"> Hack </span></div>
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {/* Get Started Button */}
                    <Link
                      to="/form" 
                      className="block w-full sm:w-auto rounded-full border border-blue-600 bg-blue-600 px-12 py-3 text-sm lg:text-lg font-medium text-white hover:bg-transparent hover:border-blue-600 hover:text-white focus:outline-none focus:ring active:text-opacity-75 transition-all duration-300 ease-in-out"
                    >
                      Get Started
                    </Link>

                    {/* Learn More Button */}
                    <Link
                      to="/learnmore"
                      className="block w-full sm:w-auto rounded-full border border-blue-600 px-12 py-3 text-sm lg:text-lg font-medium text-white hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 transition-all duration-300 ease-in-out"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          } 
        />
        <Route path="/form" element={<Form />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manageProject" element={<ManageProject />} />
        <Route path="/learnmore" element={<Learnmore />} />
      </Routes>
    </Router>
  );
}

export default App;
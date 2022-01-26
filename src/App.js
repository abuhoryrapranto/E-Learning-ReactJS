//import logo from './logo.svg';
import './App.css';
import Layout from './pages/layout';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import MyCourses from './pages/my_courses';
import Course from './pages/course';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/course/:slug" element={<Course />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />  
    </div>
  );
}

export default App;

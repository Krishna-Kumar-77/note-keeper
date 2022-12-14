import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <Router>
      <div className='container'>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/login' element={ <Login/> } />
          <Route path='/register' element={<Register/> } />
      </Routes>
      </div>
      <ToastContainer /> 
    </Router>
  );
}

export default App;

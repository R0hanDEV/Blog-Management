import './App.css';
import SignIn from './pages/signin/signin';
import SignUp from './pages/signup/signup';
import Home from './pages/home/home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<SignIn />} />
      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/Home' element={<Home />} />
    </Routes>
  );
}

export default App;

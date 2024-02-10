import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NewLogin from './components/NewLogin';
import SignUp from './components/SignUp';
import AddPost from './components/AddPost';
import Viewpost from './components/Viewpost';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element = {<NewLogin/>} />
      <Route path='/signup' element = {<SignUp/>} />
      <Route path='/add' element = {<AddPost/>} />
      <Route path='/viewall' element = {<Viewpost/>} />
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

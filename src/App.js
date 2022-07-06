import './App.css';

import styled from 'styled-components'
import SignIn from './components/SignIn'
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Wrap> 
      <Routes>
        <Route exact path="/signin" element = {<SignIn bg='sign3.jpg'/>}/>
        <Route exact path='/' element = {<Home/>}/>
      </Routes>
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  position: relative;
  .header{
    position: fixed;
    z-index: 1;
  }
`
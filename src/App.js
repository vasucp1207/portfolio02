import './App.css';
import styled from 'styled-components'
import SignIn from './components/SignIn'
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom';

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; 

import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyCewunXGpWtq-dUE37RBVhGHKbSfTFFNMA",
  authDomain: "portfolio-490c5.firebaseapp.com",
  projectId: "portfolio-490c5",
  storageBucket: "portfolio-490c5.appspot.com",
  messagingSenderId: "576879087607",
  appId: "1:576879087607:web:563c605044fd83073de8f2",
  measurementId: "G-30YBLG3Q6R"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

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
`
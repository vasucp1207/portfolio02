import React from 'react'
import styled from 'styled-components'
import ParticlesBg from 'particles-bg'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth'

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

function SignIn(props) {

    let config = {
        num: [5],
        radius: [50, 100],
        rps: 1,
        color: '#6f98ec',
        position: { x: 1, y: 1, width: 1000, height: 1000 },
        // f: [.002, .001],
        g: 0.1,
    }

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    const [user] = useAuthState(auth);

    return (

        <Container1 className='comp'>
            <Link to='/'><HomeIcon className='home'></HomeIcon></Link>
            <Wrap bg={props.bg} className="full-screen-container">
                <div className='after'>
                    <Container className="login-container">
                        <h3 className="login-title">Welcome</h3>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" />
                        </div>
                        {!user && <button onClick={signInWithGoogle} class="login-btn">Sign In With Google</button>}
                        {user && <button onClick={() => auth.signOut()} class="login-btn">Sign Out</button>}

                    </Container>
                    {user && <p className='signUp'>Congratulation You Sign Up successfully🥳</p>}
                </div>
                <Curve className='wave'>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            class="shape-fill"
                        ></path>
                    </svg>
                </Curve>
                <ParticlesBg type='custom' bg={{ position: "absolute" }} config={config} />
            </Wrap>
        </Container1>
    )
}

export default SignIn

const Container1 = styled.div`
    background: rgb(4, 88, 171);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .after{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .signUp{
        color: var(--coral);
        font-size: 20px;
    }

    .home{
        position: fixed;
        z-index: 1;
        width: 50px;
        height: 50px;
        cursor: pointer;
        color: var(--coral);
        margin-left: -530px;
        margin-top: -350px;
    }
`

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    .full-screen-container{
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .wave {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
      }

      .wave svg {
        position: relative;
        display: block;
        width: calc(103% + 1.3px);
        height: 302px;
      }

      .wave .shape-fill {
        fill: rgb(14, 108, 171);
      }
`

const Container = styled.div`
    z-index: 1;
    width: 350px;
    height: 500px;
    border: 1.5px solid var(--coral);
    padding: 10px;
    border-radius: 5px;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(93, 93, 93, 0.5);
    border: 1px solid var(--coral);
    .login-container{
        padding: 50px 30px;
        min-width: 400px;
        width: 50%;
        max-width: 600px;
    }

    .login-title{
        color: var(--coral);
        text-align: center;
        margin: 0;
        margin-bottom: 40px;
        font-size: 2.5em;
        font-weight: normal;
    }

    .input-group{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .input-group label{
        color: var(--coral);
        font-weight: 300;
        font-size: 1.5em;
        margin-bottom: 7px;
    }

    .input-group input{
        background-color: hsl(201, 100%, 91%, 0.3);
        border: 1px solid hsl(201, 100%, 6%);
        outline: none;
        font-size: 1.5em;
        padding: .1em .25em;
        border-radius: 5px;
        color: var(--coral);
        font-weight: lighter;
    }

    .input-group input:focus{
        border: 1px solid var(--coral)
    }

    .login-btn{
        padding: 10px, 30px;
        width: 100%;
        background-color: var(--coral-light1);
        border-radius: 5px;
        border: 1px solid var(--coral);
        outline: none;
        font-weight: lighter;
        font-size: 1.5em;
        color: var(--coral);
        margin-top: 20px;
        cursor: pointer;
    }

    .login-btn:hover{
        background-color: var(--coral);
        color: black;
        transition: 0.4s;
    }

    .login-btn:focus{
        background-color: var(--coral);
        color: black;
    }
`

const Curve = styled.div`
    
`
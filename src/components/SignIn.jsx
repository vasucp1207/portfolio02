import React from 'react'
import styled from 'styled-components'
import { Zoom } from 'react-reveal';
import ParticlesBg from 'particles-bg'
import { Button } from '@mui/material';

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

    return (
        <Wrap bg={props.bg} className="full-screen-container">
            {/* <Button>SignIn With Google</Button> */}
            <Container className="login-container">
                <h3 className="login-title">Welcome</h3>
                <form>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <button type="submit" className="login-btn">Sign In</button>
                </form>

            </Container>
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
    )
}

export default SignIn

const Wrap = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-image: ${props => `url("/assets/${props.bg}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */
    background: rgb(40, 40, 117);
    .full-screen-container{
        /* for image 1-5 */
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
        /* border: 30px solid linear-gradient(to right, rgb(31, 31, 100), rgb(34, 43, 88), rgb(31, 31, 100));;
        box-shadow: linear-gradient(to right, rgb(31, 31, 100), rgb(34, 43, 88), rgb(31, 31, 100));; */
      }

      .wave svg {
        position: relative;
        display: block;
        width: calc(103% + 1.3px);
        height: 302px;
      }

      .wave .shape-fill {
        fill: rgb(46, 46, 124);
      }
`

const Container = styled.div`
    z-index: 1;
    width: 350px;
    height: 500px;
    border: 1.5px solid black;
    padding: 10px;
    border-radius: 5px;
    .login-container{
        background-color: hsl(201, 100%, 6%, 0.6);
        /* top-bot, left-right */
        padding: 50px 30px;
        min-width: 400px;
        width: 50%;
        max-width: 600px;
    }

    .login-title{
        color: black;
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
        color: black;
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
        color: white;
        font-weight: lighter;
    }

    .input-group input:focus{
        border: 1px solid hsl(201, 100%, 50%)
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
        color: black;
        margin-top: 20px;
        cursor: pointer;
    }

    .login-btn:hover{
        background-color: var(--coral-light);
    }

    .login-btn:focus{
        background-color: var(--coral-light);
    }
`

const Curve = styled.div`
    
`
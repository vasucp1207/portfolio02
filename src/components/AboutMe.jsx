/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei'
import { OrbitControls } from "@react-three/drei";
import Level from '../3D-Models/Level'
import Sudo from '../3D-Models/Sudo'
import Camera from '../3D-Models/Camera'
import Cactus from '../3D-Models/Cactus'
import Icon from '../3D-Models/Icon'
import Pyramid from '../3D-Models/Pyramid'

function AboutMe(props) {

  const skills = ['C++', 'Javascript', 'React', 'Firebase', 'Python'];

  return (
    <Container bg={props.bgImg} className='about-section'>
      {/* <Zoom> */}
      <Info>
        <h1>About Me🧑🏻</h1>
        <p className='name'>Hello👋, my name is Vasu Singh</p>
        <p className='exp'>I'm am an undergrad student interested in Machine Learining, Web Developmet and Comptetive Programming. Currently I'm mainly working on OpenSource also play with Neural Networks on weekends.</p>
        <h3>Skills</h3>
        <List>
          {/* {skills.map((skill) => (<li>{skill}</li>))} */}
          <img src='../assets/html-5.png'/>
          <img src='../assets/css-3.png'/>
          <img src='../assets/c-.png'/>
          <img src='../assets/js.png'/>
          <img src='../assets/physics.png'/>
          <img src='../assets/redux.png'/>
          <img src='../assets/3js.png'/>
          <img src='../assets/node.jpg'/>
          <img src='../assets/firebase.png'/>
          <img src='../assets/python.png'/>
        </List>
      </Info>
      {/* <Anime bg = {props.anime}></Anime> */}
      <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [5, 5, 10] }} className='room'>
        <OrbitControls autoRotate />
        {/* <color attach="background" args={['#e0b7ff']} /> */}
        <ambientLight />
        <PresentationControls global zoom={0.8}>
        <group position-y={-1.2} position-x={0} dispose={null}>
          <Level />
          <Sudo />
          <Camera />
          <Cactus />
          <Icon />
          <Pyramid />
        </group>
        </PresentationControls>
      </Canvas>
      {/* </Zoom> */}
      <Curve className='wave'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </Curve>
    </Container>
  )
}

export default AboutMe

const Container = styled.div`
    padding: 40px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 125vh;
    background: white;

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
        height: 202px;
      }

      .wave .shape-fill {
        fill: rgb(4, 88, 171);
      }

      .room{
        /* position: absolute; */
      }
`

const Info = styled.div`
  /* padding: 100px; */
  margin-top: 100px;
  margin-left: 140px;
  h1{
    font-size: 70px;
  }
  .name{
    margin-top: 40px;
    color: var(--cyan);
    font-size: 20px;
  }
  .exp{
    max-width: 850px;
    margin-top: 35px;
    font-size: 20px;
  }
  h3{
    margin-top:45px;
    font-size: 50px;
  }
`

const List = styled.div`
  margin-top: 20px;
  font-size: 20px;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 20px;
  grid-column-gap: 0;
  img{
    width: 50px;
    height: 50px;
  }
`

const Anime = styled.div`
    width: 700px;
    height: 700px;
    margin-right: 80px;
    margin-bottom: 80px;
    background-image: ${props => `url("/assets/${props.bg}")`};
    background-size: cover;
    background-repeat: no-repeat; 
`

const Curve = styled.div`
`
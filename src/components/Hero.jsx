import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import ai from '../assets/ai.png'
import { Zoom } from 'react-reveal';
import ParticlesBg from 'particles-bg'
import Social from './Social';
import New7 from './New7'

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Hero() {

  let config = {
    num: [3],
    radius: [50, 100],
    rps: 2,
    color: '#6f98ec',
    position: { x: 1, y: 1, width: 1000, height: 1000 },
    // f: [.002, .001],
    g: 0.1,
  }

  return (
    <Wrap id='particles-js'>
      <Left>
        <Social />
      </Left>
      <Right>
        {/* <ParticlesBg type="custom" num={3} bg={true} config={config} /> */}
        {/* <Zoom> */}
        <Container className='about'>
          <Info>
            <p className='head--main'>Hi, my name is</p>
            <p className='name'>Vasu Singh</p>
            <p className='description'>Nerd who is interesting in Tech World</p>
            <p className='hobby'>
              Currently I'm getting started with
              OpenSource,
              and also loves the comptetive programming.
              I have keen interest in Neural Networks also.
            </p>
          </Info>

          <Btn>
            <Button className='btn' variant="outlined">Get In Touch</Button>
          </Btn>

        </Container>
        
        </Right>
        {/* <Ai>
          <img src={ai} />
        </Ai> */}
        {/* <div className='voxel'> */}
          <Canvas camera={{ position: [6, 6, 6] }} clasName="canvas">
            <OrbitControls />
            <ambientLight intensity={1} />
            <directionalLight position={[19, 15, 16]} />
              <New7 />
          </Canvas>
        {/* </div> */}
        {/* </Zoom> */}
    </Wrap>
  )
}

export default Hero

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  gap: 800px;

  .canvas{
  }
`

const Container = styled.div`
  padding: 80px;

  .btn{
    height: 50px;
    color: var(--coral);
    border: 1px solid var(--coral);
    margin-top: 60px;
    font-size: 17px;
    :hover{
      border: 1px solid var(--coral);
      background: var(--coral);
      color: white;
      border-radius: 15px;
      transition: 0.5s;
    }
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  .head--main{
    color: var(--coral);
  }
  .head--main{
    font-size: 20px;
  }
  .name{
    font-size: 80px;
    font-weight: 500;
    margin-top: 35px;
    color: lightcyan;
  }
  .description{
    font-size: 40px;
    margin-top: 25px;
    color: lightcyan;
  }
  .hobby{
    color:  lightsteelblue;
    font-size: 20px;
    margin-top: 25px;
    max-width: 450px;
  }
`

const Btn = styled.div`
  
`

const Ai = styled.div`
  padding: 70px;
  margin-right: 60px;
  img{
    height: 500px;
    width: 500px;
    object-fit: cover;
    mask-repeat: no-repeat;
  }
`

const Left = styled.div`
  flex: 0.07;
  z-index: 1;
`

const Right = styled.div`
  /* z-index: -1; */
  position: absolute;
  display: flex;
  margin-left: 100px;
  flex: 0.93;
`
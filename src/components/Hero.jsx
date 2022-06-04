import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import ai from '../assets/ai.png'
import { Zoom } from 'react-reveal';
import ParticlesBg from 'particles-bg'

function Hero() {

  let config = {
    num: [3],
    radius: [50, 100],
    rps: 1,
    color: '#6f98ec',
    position: { x: 1, y: 1, width: 1000, height: 1000 },
    // f: [.002, .001],
    g: 0.1,
  }

  return (
    <Wrap id='particles-js'>
      <ParticlesBg type="custom" num={3} bg={true} config={config} />
      <Zoom>
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
        <Ai>
          <img src={ai} />
        </Ai>
      </Zoom>
    </Wrap>
  )
}

export default Hero

const Wrap = styled.div`
  height: 100vh;
  display: flex;
`

const Container = styled.div`
  padding: 80px;

  .btn{
    height: 50px;
    color: #e85a4f;
    border: 1px solid #e85a4f;
    margin-top: 60px;
    font-size: 17px;
    :hover{
      border: 1px solid #e85a4f;
      /* background: var(--coral);
      color: white; */
    }
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  .head--main{
    color: #e85a4f;
  }
  .head--main{
    font-size: 20px;
  }
  .name{
    font-size: 80px;
    font-weight: 500;
    margin-top: 35px;
    color: #72716e;
  }
  .description{
    font-size: 40px;
    margin-top: 25px;
    color: #8e8d8a;
  }
  .hobby{
    color:  #eae1dc;
    font-size: 20px;
    margin-top: 25px;
    max-width: 400px;
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
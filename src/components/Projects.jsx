import React from 'react'
import { Zoom } from 'react-reveal';
import styled from 'styled-components';
import ParticlesBg from 'particles-bg'
import { Card, CardContent, Typography } from '@mui/material';
import { style } from '@mui/system';

function Projects(props) {

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
    <Wrap>

      {/* {props.type && <Content className='card'>
        <p className='title'>{props.title}</p>
        <Card>
          <CardContent className='des'>
            <Typography className='typography'>
              {props.description}
            </Typography>
          </CardContent>
        </Card>
      </Content>}
      <Img bg = {props.image}>
      </Img>
      {!props.type && <Content className='card-right'>
        <p className='title-right'>{props.title}</p>
        <Card>
          <CardContent className='des'>
            <Typography className='typography'>
              {props.description}
            </Typography>
          </CardContent>
        </Card>
      </Content>} */}

      <MyCard>
        <Img bg = {props.image}></Img>
        <p className='title'>{props.title}</p>
        <p className='description'>{props.description}</p>
      </MyCard>
    </Wrap>
  )
}

export default Projects

const Wrap = styled.div`
  padding: 70px;
  .title{
    font-size: 23px;
  }
  .title-right{
    font-size: 23px;
  }
  .card{
    padding: 0;
    gap: 10px;
    width: 420px;
    height: 200px;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }
  .card-right{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 420px;
    height: 200px;
    margin-left: -70px;
    z-index: 1;
  }
  .title-right{
    display: flex;
    justify-content: end;
    color: lightcyan;
  }
  .title{
    color: lightcyan;
    display: flex;
    justify-content: center;
  }
  .des{
    background: var(--gray);
  }
  .typography{
    font-size: 16px;
  }
  .description{
    max-width: 370px;
    color: white;
  }
`

const Curve = styled.div`

`

const Img = styled.div`
  /* height: 370px;
  width: 600px;
  margin-left: -70px;
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url("/assets/${props.bg}")`};
  opacity: 0.4;
  border-radius: 7px;
  right: 155px;
  :hover{
    transform: scale(1.03);
    transition: 0.5s;
    opacity: 1;
    cursor: pointer;
  } */
  width: 400px;
  height: 290px;
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url("/assets/${props.bg}")`};
  border-radius: 20px;
  cursor: pointer;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  :hover{
    transform: scale(1.03);
    transition: 0.5s;
  }
`

const MyCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
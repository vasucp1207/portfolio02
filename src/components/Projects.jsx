import React from 'react'
import styled from 'styled-components';
import { Button } from '@mui/material'

function Projects(props) {

  return (
    <Wrap className='project-section'>

      <MyCard>
        <Img bg = {props.image}></Img>
        <p className='title'>{props.title}</p>
        <p className='description'>{props.description}</p>
        <a href={props.link} target='_blank' rel="noreferrer"><Button className='btn'>Github →</Button></a>
      </MyCard>
    </Wrap>
  )
}

export default Projects

const Wrap = styled.div`
  padding: 0;
  margin: 0;
  width: 400px;
  border-radius: 20px;
  overflow: hidden;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(93, 93, 93, 0.6);
    border: 1px solid gray;
    border: 1px solid var(--coral); 
`

const Img = styled.div`
  width: 399px;
  height: 390px;
  background-image: ${props => `url("/assets/${props.bg}")`};
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 0;
  /* border-radius: 20px; */
  cursor: pointer;
  opacity: 0.5;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  
  &:hover{
    opacity: 1;
    transition: .3s;
  }
`

const MyCard = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 400px;

    .title{
      font-size: 27px;
      color: var(--coral);
      font-weight: bold;
    }
    .description{
      font-size: 18px;
      color: white;
      padding: 7px;
    }

  .btn{
    height: 45px;
    color: var(--coral);
    font-size: 17px;
    margin-left: 260px;
    :hover{
      border: 1px solid var(--coral);
      color: white;
      border-radius: 15px;
      transition: 0.5s;
    }
  }
  a{
    text-decoration: none;
  }
`
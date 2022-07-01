import React from 'react'
import styled from 'styled-components'
import { Zoom } from 'react-reveal';

function AboutMe(props) {

  const skills = ['C++', 'Javascript', 'React', 'Firebase', 'Python'];

  return (
    <Container bg = {props.bgImg}>
      {/* <Zoom> */}
        <Info>
          <h1>About Me🧑🏻</h1>
          <p className='name'>Hello👋, my name is Vasu Singh</p>
          <p className='exp'>I'm am an undergrad student interested in Machine Learining, Web Developmet and Comptetive Programming. Currently I'm mainly working on OpenSource also play with Neural Networks on weekends.</p>
          <h3>Skills</h3>
          <List>
            {skills.map((skill) => (<li>{skill}</li>))}
          </List>
        </Info>
        <Anime bg = {props.anime}></Anime>
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
    /* width: 100vw; */
    background: white;
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/assets/${props.bg}")`};

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
`

const Info = styled.div`
  padding: 100px;
  /* margin-top: 100px; */
  h1{
    font-size: 70px;
  }
  .name{
    margin-top: 40px;
    color: var(--cyan);
    font-size: 20px;
  }
  .exp{
    max-width: 450px;
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
  li::marker{
    color: var(--cyan);
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
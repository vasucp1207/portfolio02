import React from 'react'
import GitHub from '@mui/icons-material/GitHub';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import PlayArrow from '@mui/icons-material/PlayArrow';
import styled from 'styled-components'
import { Fade } from 'react-reveal';

function Social() {

  return (
    <Container>
      <Fade left>
          <GitHub className='icon' onClick={() => window.open('https://github.com/vasucp1207')}></GitHub>
          <Twitter className='icon'></Twitter>
          <Instagram className='icon'></Instagram>
          <PlayArrow className='icon'></PlayArrow>
          <LinkedIn className='icon'></LinkedIn>
        </Fade>
    </Container>
  )
}

export default Social

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-left: 30px;
    position: fixed;
    bottom: 0;
    left: 0;

    @media(max-width: 650px) {
    display: none;
    }

    &:after {
    content: '';
    display: block;
    width: 1px;
    height: 100px;
    margin: 0 11px;
    background-color: #8e8d8a;
    }
    margin-top: calc(100vh - 380px);

    .icon{
      height: 33px;
      width: 33px;
      color: #8e8d8a;
    }
    .icon:hover{
        transform: translateY(-8px);
        transition: 0.5s;
        color: #e85a4f;
    }
`
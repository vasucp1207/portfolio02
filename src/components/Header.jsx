import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

function Header() {

  const list = ['Home', 'AboutMe', 'Blogs']
  const [navShow, clickNav] = React.useState(false)

  function handleClicked() {
    clickNav((prev) => !prev)
  }

  return (
    // <Fade right> cause bug on refreshing
      <Container>

        <Avatar className='avatar'>V</Avatar>
        <Wrap>
          {/* {list.map((items) => (<a href='#'><li>{items}</li></a>))} */}
          <a href='#'><li>Home</li></a>
          <a href='#'><li>AboutMe</li></a>
          <a href='#'><li>Projects</li></a>
          <a href='#'><li>Blogs</li></a>
          <Link to="/signin"><a href='#'><li>SignIn</li></a></Link>
        </Wrap>
        <CustomNav>
          <MenuIcon className='menu' onClick={handleClicked}></MenuIcon>
          <Navbar show={navShow}>
            <ClearIcon className='clear' onClick={handleClicked}></ClearIcon>
            {/* {list.map((items) => (<a href='#'><li>{items}</li></a>))} */}
            <a href='#'><li>Home</li></a>
            <a href='#'><li>AboutMe</li></a>
            <a href='#'><li>Projects</li></a>
            <a href='#'><li>Blogs</li></a>
            <Link to="/signin"><a href='#'><li>SignIn</li></a></Link>
          </Navbar>
        </CustomNav>
        {/* {!navShow && <MenuIcon className='menu' onClick = {handleClicked}></MenuIcon>} */}

      </Container>
    // </Fade>
  )
}

export default Header

const Container = styled.div`
  height: 80px;
  padding: 13px;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .avatar{
    width: 50px;
    height: 50px;
  }
  a{
    text-decoration: none;
    padding: 0;
  }
  li{
    list-style: none;
    font-size: 18px;
    text-decoration: none;
  }
`

const Wrap = styled.div`
  display: flex;
  font-size: 20px;
  gap: 40px;
  li{
    list-style: none;
    color: #e85a4f;
  }
  /* li:hover{
      border: 1px solid white;
      border-radius: 3px;
  } */

  @media(max-width: 550px) {
   display: none;
  }
`

const CustomNav = styled.div`
  @media(min-width: 550px) {
   display: none;
  }
`

const Navbar = styled.div`
  @media(min-width: 550px) {
   display: none;
  }

  .clear{
    cursor: pointer;
    margin-left: auto;
  }
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: white;
  position: fixed;
  width: 170px;
  padding: 10px;
  top: 0;
  bottom: 0;
  right: 0;
  background: var(--coral);
  li{
    list-style: none;
    color: white;
  }
  a{
    text-decoration: none;
    border-bottom: 1px solid white;
  }
`
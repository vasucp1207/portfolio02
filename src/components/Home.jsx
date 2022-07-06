import styled from 'styled-components'
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import React from 'react';
import Navbar from './Navbar';

function Home() {

  const [navbarAct, setNav] = React.useState(false)

  function changeNav() {
    if (window.scrollY >= 160) {
      setNav(true)
    }
    else if (window.screenY < 160) {
      setNav(false)
    }
    if (window.innerWidth <= 800) {
      setNav(true)
    }
  }

  React.useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  })
  React.useEffect(() => {
    changeNav()
    window.addEventListener("resize", changeNav)
  })

  return (
    <Wrap>
      <HeaderWrap className={navbarAct ? 'navbarAct' : 'navbar'}>
        <Navbar />
      </HeaderWrap>
      <Container>
        <Right>
          <Hero className='hero' />
          <AboutMe bgImg='../assets/geomt.jpg' anime='anime.png' />
          <Pp>

            <h1 className='projects'>Projects</h1>

            <div className='grid'>
              <Projects
                title='Covid-19 Dashboard'
                description='Real time Covid-19 app using disease.sh api showing no of Cases, Deaths and Recoveries on the world map.'
                image='covid.png'
                link='https://github.com/vasucp1207/covid-19-tracker'
              />

              <Projects
                title='Disney Clone'
                description='Disney website clone it using disney api to show the moveis data and details made with ReactJs, Firebase and Material Ui.'
                image='disney.png'
                link='https://github.com/vasucp1207/disney-clone'
              />

              <Projects
                title='Tesla Ui'
                description='This website is the replica of offical Tesla website build with ReactJs and Material Ui.'
                image='tesla.png'
                link='https://github.com/vasucp1207/tesla-clone'
              />

            </div>
            <Curve className='wave'>
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  class="shape-fill"
                ></path>
              </svg>
            </Curve>

          </Pp>
        </Right>
      </Container>
    </Wrap>

  );
}

export default Home;

const Wrap = styled.div`
  position: relative;
  .projects{
    color: white;
    font-size: 60px;
    font-weight: 500;
    padding: 70px;
    margin-top: 110px;
  }
  .grid{
    display: grid;
    justify-content: center;
    grid-template-columns: auto auto;
    grid-gap: 100px;
  }
  .navbar{
    align-items: center;
    z-index: 11;
  }
  .navbarAct{
    align-items: center;
    z-index: 11;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(93, 93, 93, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
`

const Container = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 0.07;
  z-index: 1;
`

const Right = styled.div`
  
`

const Pp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* gap: 30px; */
  justify-content: center;
  .projects{
    color: lightcyan;
    margin-left: 80px;
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
        height: 202px;
      }

      .wave .shape-fill {
        fill: white;
      }
`

const Curve = styled.div`

`

const HeaderWrap = styled.div`
  position: fixed;
  z-index: 1;
  width: 100vw;
`
import Header from './Header';
import Social from './Social';
import styled from 'styled-components'
import Hero from './Hero';
import AboutMe from './AboutMe';
import Blogs from './Blogs';
import Projects from './Projects';
import { Zoom } from 'react-reveal';
import ParticlesBg from 'particles-bg'

function Home() {

  return (
    <Wrap>
      <Header />
      <Container>
        <Left>
          <Social />
        </Left>
        <Right>
          <Hero />
          <AboutMe bgImg='../assets/geomt.jpg' anime='anime.png' />
          {/* <Bg bg='pencils.jpg'>
            <h1 className='bg'>Blogs📚</h1>
            <Bgg>
              <Blogs classname = 'blogs'
                  title='Web Development'
                  backgroundImg='webDev.jpg'
                  description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia asperiores dicta qui quaerat amet culpa placeat, accusamus consequatur nesciunt repudiandae error consectetur earum.'
                />
                <Blogs classname = 'blogs'
                  title='Machine Learning'
                  backgroundImg='ML.jpg'
                  description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia asperiores dicta qui quaerat amet culpa placeat, accusamus consequatur nesciunt repudiandae error consectetur earum.'
                />
                <Blogs classname = 'blogs'
                  title='Comptetive Programming'
                  backgroundImg='CP.jpg'
                  description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia asperiores dicta qui quaerat amet culpa placeat, accusamus consequatur nesciunt repudiandae error consectetur earum.'
                />
              </Bgg>
            </Bg> */}
          <Pp>
          
          <h1 className='projects'>Projects</h1>

          <Projects
            type='true'
            title='Covid-19 Dashboard'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia asperiores dicta qui quaerat amet culpa placeat, accusamus consequatur nesciunt repudiandae error consectetur earum'
            image='covid.png'
          />

          <Projects
            // type='false'
            title='Tesla Ui'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia asperiores dicta qui quaerat amet culpa placeat, accusamus consequatur nesciunt repudiandae error consectetur earum'
            image='tesla.png'
          />

          <Projects
            type='true'
            title='Disney Clone'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia asperiores dicta qui quaerat amet culpa placeat, accusamus consequatur nesciunt repudiandae error consectetur earum'
            image='disney.png'
          />
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
  .projects{
    color: white;
    font-size: 60px;
    font-weight: 500;
    padding: 70px;
    margin-top: 110px;
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
  flex: 0.93;
`

const Bg = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 70px;
  .bg{
    margin-left: calc(100vh / 2 + 80px);
  }
  /* background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1); */
  /* background-image: linear-gradient(to right,rgb(231, 139, 238), rgb(220, 220, 239), rgb(205, 137, 244)); */

  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url("/assets/${props.bg}")`};
  .bg{
    font-size: 50px;
    font-weight: 400;
    color: black;
  }
`

const Bgg = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`

const Pp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
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
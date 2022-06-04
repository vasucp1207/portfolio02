import React from 'react'
import { Chip, Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';
import FaceIcon from '@mui/icons-material/Face';
import { Zoom } from 'react-reveal';

function Blogs(props) {
  return (
    <Wrap>
        <Zoom>
            <Card className='card' variant='outlined'>
                <CardContent>
                    <BackPic  bg = {props.backgroundImg}></BackPic>
                    <Typography className='title' color='primary'>
                        {props.title}
                    </Typography>
                    <p>
                        {props.description}
                    </p>
                    <Chip className='learn' icon={<FaceIcon />} label="Learn More" />
                </CardContent>
            </Card>
        </Zoom>
    </Wrap>
  )
}

export default Blogs

const Wrap = styled.div`
    .card{
        box-shadow: 0px 0px 9px 5px var(--gray);
        width: 265px;
        height: 365px;
        :hover{
            transform: scale(1.05);
            transition: 0.5s;
            box-shadow: 10px 10px 20px var(--gray);
        }
    }

    .title{
        font-size: 20px;
    }

    p{
        margin-top: 8px;
        font-size: 12px;
        color: black;
    }

    .learn{
        margin-left: 120px;
        margin-top: 3px;
        cursor: pointer;
        :hover{
            background-color: var(--coral);
        }
    }
`

const BackPic = styled.div`
    height: 180px;
    width: 100%;
    background-image: ${props => `url("/assets/${props.bg}")`};
    background-size: cover;
    background-repeat: no-repeat;
`
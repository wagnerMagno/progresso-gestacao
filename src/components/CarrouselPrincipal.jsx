import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import images from './../asserts/images/index';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        fontSize: '1.5em',
        color: process.env.REACT_APP_SECONDARY_COLOR,
    },
    
}));

export default function CarrouselPrincipalComponent(props) {
    const classes = useStyles();

    return (
        <div  className="intro">
           

            <Carousel>
                <div>
                    <img src={images.testeAnalogico} />
                </div>
                <div>
                    <img src={images.testteDigital} />
                </div>
            </Carousel>

        </div>
    );
}


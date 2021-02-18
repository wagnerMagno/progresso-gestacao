import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import images from './../asserts/images/index';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const useStyles = makeStyles((theme) => ({
    section: {
        textAlign: 'justify',
        color: process.env.REACT_APP_SECONDARY_COLOR
    },
    title: {
        textAlign: 'center'
    }

}));

export default function SectionComponent({ props }) {
    const classes = useStyles();

    return (
        <div id={props.key} className={classes.section}>
            <h3 className={classes.title} >{props.title}</h3>
            <p>
                {props.description}
            </p>


            {props.images.length > 0 &&
                <Carousel>
                    {
                        props.images.map(src => {
                            return (
                                <div>
                                    <img src={src} />
                                </div>
                            )
                        })
                    }
                </Carousel>
            }

        </div>
    );
}

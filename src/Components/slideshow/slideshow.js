import React from 'react'
import Maroon5 from './../../Images/Maroon 5.jpg';
import Carousel from 'react-material-ui-carousel'
import '../slideshow/slideshow.scss'
// import M from 'materialize-css';

const Slideshow = () => {
    return (
        <Carousel autoPlay = {true} interval = {1000} indicators = {false} animation = {'slide'}>
            <img src={ Maroon5 } alt="" className="carousel-image"/>
        </Carousel>
    )
}

export default Slideshow
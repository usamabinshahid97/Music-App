import React from 'react'
// import test1 from '../Images/test1.jpg'
import Maroon5 from '../Images/maroon5_1.jpg'
// import CoverPhoto from '../Images/cover-photo.jpg'
// import CoverPhoto1 from '../Images/cover-photo1.jpg'
import Carousel from 'react-material-ui-carousel'
// import M from 'materialize-css';

const Slideshow = () => {
    return (
        <Carousel autoPlay = {true} interval = {1000} indicators = {false} animation = {'slide'}>
            {/* <img src={ test } alt="" className="carousel-image"/> */}
            <img src={ Maroon5 } alt="" className="carousel-image"/>
        </Carousel>
    )
}

export default Slideshow
import React from 'react'
import Passenger from '../Images/passenger.jpg'
import TaylorSwift from '../Images/taylor-swift.jpg'
import LadyGaga from '../Images/lady-gaga.jpg'
import Maroon5 from '../Images/maroon5_1.jpg'

const Recommended = () => {
    return (
        <div className="recommended-component">
            <div className="recommended-container">
                <div className="recommended-top-bar">
                    <div className="heading">Recommended</div>
                    <div className="icons">
                        <i className="fa fa-chevron-right"></i>
                    </div>
                </div>
                <div className="recommended-playlist">
                    <div className="song-container">
                        <div className="card-image">
                            <img src={ Passenger } alt="passenger" className="singer-image"/>
                        </div>
                        <div className="song-name">
                            Ler Her Go
                        </div>
                        <div className="singer-name">
                            Passenger
                        </div>
                    </div>
                    <div className="song-container">
                        <div className="card-image">
                            <img src={ TaylorSwift } alt="passenger" className="singer-image"/>
                        </div>
                        <div className="song-name">
                            Blank Space
                        </div>
                        <div className="singer-name">
                            Taylor Swift
                        </div>
                    </div>
                    <div className="song-container">
                        <div className="card-image">
                            <img src={ LadyGaga } alt="passenger" className="singer-image"/>
                        </div>
                        <div className="song-name">
                            Remember us this way
                        </div>
                        <div className="singer-name">
                            Lady Gaga
                        </div>
                    </div>
                    <div className="song-container">
                        <div className="card-image">
                            <img src={ Maroon5 } alt="passenger" className="singer-image"/>
                        </div>
                        <div className="song-name">
                            Girls like you
                        </div>
                        <div className="singer-name">
                            Maroon 5
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommended
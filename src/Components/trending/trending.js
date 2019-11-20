import React from 'react'
import SongContainer from '../songContainer/songContainer'
import './trending.scss'

const Trending = () => {
    return (
        <div className="trending-component">
            <div className="trending-container">
                <div className="trending-top-bar">
                    <div className="heading">Trending</div>
                    <div className="icons">
                        <i className="fa fa-chevron-right"></i>
                    </div>
                </div>
                <div className="trending-playlist">
                    <SongContainer time='3:35' singerName='Passenger' songName='Let Her Go'/>
                    <SongContainer time='4:03' singerName='Taylor Swift' songName='Blank Space'/>
                    <SongContainer time='5:13' singerName='Lady Gaga' songName='Remember us this way'/>
                    <SongContainer time='6:57' singerName='Maroon 5' songName='Girls like you'/>
                </div>
            </div>
        </div>
    )
}

export default Trending
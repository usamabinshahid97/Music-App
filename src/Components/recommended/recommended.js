import React from 'react'
import SongContainer from '../songContainer/songContainer'
import '../recommended/recommended.scss'


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
                    <SongContainer time='2:59' singerName='Passenger' songName='Let Her Go'/>
                    <SongContainer time='3:45' singerName='Taylor Swift' songName='Blank Space'/>
                    <SongContainer time='4:23' singerName='Lady Gaga' songName='Remember us this way'/>
                    <SongContainer time='7:35' singerName='Maroon 5' songName='Girls like you'/>
                </div>
            </div>
        </div>
    )
}

export default Recommended
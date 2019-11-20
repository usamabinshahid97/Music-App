import React from 'react'
import './songContainer.scss'

const SongContainer = ({time, singerName, songName}) => {
    return (
        <div className="song-container">
            <div className="card-image">
                <div className="song-timestamp">
                    <span className="song-timestamp-text">{time}</span>
                </div>
                <img src={require(`./../../Images/${singerName}.jpg`) } alt="passenger" className="singer-image"/>
            </div>
            <div className="song-name">
                {songName}
            </div>
            <div className="singer-name">
                {singerName}
            </div>
        </div>
    )
}

export default SongContainer
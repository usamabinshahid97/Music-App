import React from 'react'
import './topMusicSongContainer.scss'

const TopMusicSongContainer = ({singerName, songName}) => {
    return (
        <div className="top-music-song-container">
            <div className="play-icon-wrapper">
                <span className="fa fa-play"></span>
            </div>
            <div className="song-info">
                <div className="song-name">
                    {songName}
                </div>
                <div className="singer-name">
                    {singerName}
                </div>
            </div>
        </div>
    )
}

export default TopMusicSongContainer
import React from 'react'
import TopMusicSongContainer from '../topMusicSongContainer/topMusicSongContainer'
import './topMusic.scss'

const TopMusic = () => {
    return (
        <div className="top-music-component">
            <div className="top-music-container">
                <div className="top-music-heading">Top Music</div>
                <div className="top-music-playlist">
                    <TopMusicSongContainer singerName='Passenger' songName='Let Her Go'/>
                    <TopMusicSongContainer singerName='Taylor Swift' songName='Blank Space'/>
                    <TopMusicSongContainer singerName='Passenger' songName='Fear of Fear'/>
                    <TopMusicSongContainer singerName='Ed Sheeran' songName='Shape of you'/>
                    <TopMusicSongContainer singerName='Lady Gaga' songName='Shallow'/>
                </div>
            </div>
        </div>
    )
}

export default TopMusic
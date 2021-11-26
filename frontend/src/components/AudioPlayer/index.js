import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {useSongUrl} from '../../context/SongUrl'
import './AudioPlayer.css'
function AudioBar () {
    const {currentUrl} = useSongUrl();
    return(
        <div className='audio-container'>
            <AudioPlayer
                src={currentUrl}
            />
        </div>

    )
}






export default AudioBar;

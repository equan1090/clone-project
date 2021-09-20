import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {useSongUrl} from '../../context/SongUrl'
function AudioBar () {
    const {currentUrl} = useSongUrl();
    console.log('*****SONG URL********', currentUrl)
    return(
        <div>
            <AudioPlayer
                src={currentUrl}
                onPlay={e => console.log("onPlay")}
                // other props here
            />
        </div>

    )
}






export default AudioBar;

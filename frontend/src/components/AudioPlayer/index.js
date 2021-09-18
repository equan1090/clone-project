import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function AudioBar () {
    

    return(
        <div>
            <AudioPlayer
                src="https://hosted-songs.s3.us-west-1.amazonaws.com/Killing%2BIn%2BThe%2BName%2B(RATM%2BRemix)+-+deadmau5.mp3"
                onPlay={e => console.log("onPlay")}
                // other props here
            />
        </div>

    )
}






export default AudioBar;

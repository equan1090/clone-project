import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function AudioBar () {


    return(
        <div>
            <AudioPlayer
                src="https://tune-cloud-audio.s3.us-west-1.amazonaws.com/Saikai.mp3"
                onPlay={e => console.log("onPlay")}
                // other props here
            />
        </div>

    )
}






export default AudioBar;

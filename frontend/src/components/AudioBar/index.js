import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function AudioBar() {

    return(
        <div>
            <AudioPlayer
                autoPlay
                src=""
                onPlay={e => console.log("onPlay")}
                // other props here
            />
        </div>

    );
}
export default AudioBar;

import React from 'react';
import video from '../interfaces/video';

const VideoItem: React.FC<{video: video}> = ({ video }) => {

    return(
        <div>
            Video
            {video.snippet.title}
        </div>
    )
};

export default VideoItem;
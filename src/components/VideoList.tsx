import React from 'react';
import video from '../interfaces/video';
import VideoItem from './VideoItem';

interface IProps {
    videos: Array<video>
};

const VideoList: React.FC<IProps> = ({ videos }) => {

    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} />
    });

    return (
        <div>
            {renderedList}
        </div>
    )
}

export default VideoList
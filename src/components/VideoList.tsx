import React from 'react';
import video from '../interfaces/video';
import VideoItem from './VideoItem';

interface IProps {
    videos: Array<video>,
    onVideoSelect: (video: video) => void
};

const VideoList: React.FC<IProps> = ({ videos, onVideoSelect }) => {

    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
    });

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList
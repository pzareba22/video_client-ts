import React from 'react';
import video from '../interfaces/video';
import './VideoItem.css'

interface IProps {
    onVideoSelect: (video: video) => void
    video: video
}

const VideoItem: React.FC<IProps> = ({ video, onVideoSelect }) => {

    return(
        <div className="video-item item" onClick={() => {onVideoSelect(video)}}> 
            <img className="ui image" src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;
import React from 'react';
import video from '../interfaces/video';
import './VideoItem.css'

interface IProps {
    onVideoSelect: (video: video) => void
    video: video
}

const VideoItem: React.FC<IProps> = ({ video, onVideoSelect }) => {

    const handler: React.MouseEventHandler<HTMLDivElement> = (e) =>{
        console.log(`You just clicked:\n ${video.snippet.title} 📺`);
        onVideoSelect(video);
    }

    return(
        <div className="video-item item" onClick={handler}> 
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;
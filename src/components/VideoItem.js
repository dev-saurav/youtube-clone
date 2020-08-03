import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, selectVideo }) => {
    return (
        <div className="video-item item" onClick={() => selectVideo(video)}>
            <img className="ui image" src={video.snippet.thumbnails.default.url} alt={video.snippet.description} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;
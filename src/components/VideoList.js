import React from 'react'
import VideoItem from '../components/VideoItem';

const VideoList = ({ videoList, selectVideo }) => {
    //creates a list of videos
    const renderedVideos = videoList.map(video => <VideoItem selectVideo={selectVideo} key={video.id.videoId} video={video} />)

    return (
        <div className="ui relaxed divided list">
            {renderedVideos}
        </div>
    )
}

export default VideoList;
import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';

class App extends React.Component {
    state = {
        videoList: [],
        selectedVideo: {}
    }
    onSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videoList: response.data.items
        })
    }
    //this function selects a video and updates the selected video state
    selectVideo = (video) => {
        console.log(video);
        this.setState({ selectedVideo: video });
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSubmit} />
                <VideoList videoList={this.state.videoList} selectVideo={this.selectVideo} />
            </div>
        )
    }
}

export default App;
import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';

class App extends React.Component {
    state = {
        videoList: []
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
    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSubmit} />
                I have {this.state.videoList.length} videos.
                <VideoList videoList={this.state.videoList} />
            </div>
        )
    }
}

export default App;
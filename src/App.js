import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends React.Component {

    state = {
        videoList: [],
        selectedVideo: null
    }

    //default video //default search term
    componentDidMount() {
        this.onSubmit("React.js")
    }

    onSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videoList: response.data.items,
            //first video is set a video on search
            selectedVideo: response.data.items[0]
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
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videoList={this.state.videoList} selectVideo={this.selectVideo} />
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default App;
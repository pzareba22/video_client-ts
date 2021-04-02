import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import video from '../interfaces/video';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

interface IState {
    videos: Array<video>
    selectedVideo: video | null
};

class App extends React.Component<{}, IState> {
    state: IState = {videos: [], selectedVideo: null};

    handleSubmit = async(term: string) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items });
    };

    onVideoSelect = (video: video) => {
        console.log(video)
        this.setState({
            selectedVideo: video
        });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.handleSubmit}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
        )
    }
}

export default App;
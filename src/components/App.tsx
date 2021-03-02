import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import video from '../interfaces/video'
import VideoList from './VideoList'

interface IState {
    videos: Array<video>
};

class App extends React.Component<{}, IState> {
    state: IState = {videos: []};

    handleSubmit = async(term: string) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.handleSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;
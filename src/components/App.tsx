import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import Video from '../interfaces/video'

interface IState {
    videos: Array<Video>
}

class App extends React.Component<{}, IState> {
    state = {videos: []};

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
            </div>
        )
    }
}

export default App;
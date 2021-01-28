import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../api/youtube'

class App extends React.Component {

    handleSubmit = async(term: string) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        console.log(response.data.items[0]);

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
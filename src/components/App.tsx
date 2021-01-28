import React from 'react';
import SearchBar from './SearchBar'

class App extends React.Component {

    handleSubmit = (term: string) => {
        console.log(`app says: ${term}`);
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
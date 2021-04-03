import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import video from "../interfaces/video";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

interface IState {
    videos: Array<video>;
    selectedVideo: video | null;
}

class App extends React.Component<{}, IState> {
    state: IState = { videos: [], selectedVideo: null };

    handleSubmit = async (term: string) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
            },
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        });
    };

    onVideoSelect = (video: video) => {
        this.setState({
            selectedVideo: video,
        });
    };

    componentDidMount() {
        this.handleSubmit("Gang Albanii");
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.handleSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

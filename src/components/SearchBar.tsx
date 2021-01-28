import React from 'react';

interface IState {
    term: string
};

interface IProps {
    onSubmit: (term: string) => void
};


class SearchBar extends React.Component<IProps, IState> {
    state: IState = {term: ''};

    onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video search</label>
                        <input
                            type="text"
                            onChange={(e) => this.setState({ term: e.target.value })}
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
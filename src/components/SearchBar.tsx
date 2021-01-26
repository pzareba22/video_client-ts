import React from 'react';

interface IState {
    term: string
};

interface IProps {
    onSubmit: (term: string) => void
};


class SearchBar extends React.Component<IProps, IState> {
    state = {term: ''};

    onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return(
            <form onSubmit={this.onFormSubmit}>
                <input
                    type="text"
                    onChange={(e) => this.setState({ term: e.target.value })}
                    value={this.state.term}
                />
            </form>
        );
    }
}

export default SearchBar;
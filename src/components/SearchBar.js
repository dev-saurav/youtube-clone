import React from 'react';

class SearchBar extends React.Component {
    state = { term: "" }
    //handle search submit
    onSearchSubmit = (e) => {
        e.preventDefault();
        //call the function on the parent class
        this.props.onSubmit(this.state.term)
    }
    render() {
        return (
            <div className="ui segment search-bar">
                <form
                    className="ui form"
                    onSubmit={(e) => this.onSearchSubmit(e)}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>

        )
    }
}

export default SearchBar;
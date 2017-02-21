const React = require('react');
const HeaderSearchBar = require('../HeaderSearchBar');

class HeaderSearchBarContainer extends React.Component {

    render() {
        return (
            <HeaderSearchBar placeholder={'Which topics are you interested in?'} onSubmit={this.onSubmit}/>
        );
    }

    onSubmit = () => {

    }
}

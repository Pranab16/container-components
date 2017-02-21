const React = require('react');
const Router = require('react-router').Router;
const HeaderSearchBar = require('../HeaderSearchBar');

class HeaderSearchBarContainer extends React.Component {

  render() {
    return (
      <HeaderSearchBar placeholder={'Which topics are you interested in?'} onSubmit={this.onSubmit}/>
    );
  }

  onSubmit = (query) => {
    Router.transitionTo('/search', {filters: {query: query}});
  }
}

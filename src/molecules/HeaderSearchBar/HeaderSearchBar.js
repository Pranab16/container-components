const React = require('react');
const classnames = require('classnames');

const PropTypes = require('spr-web-components/src/lib/PropTypes');
const Icon = require('spr-web-components/src/atoms/Icon');

const TextInput = require('../../atoms/TextInput');
const searchIcon = require('../../img/search.svg');
require('./HeaderSearchBar.scss');

class HeaderSearchBar extends React.Component {
  constructor(props, context) {
    super(props);

    this.state = {
      searchInput: context.location && context.location.query.keyword ? context.location.query.keyword : ''
    };

    this.saveSearchTerm = this.saveSearchTerm.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  saveSearchTerm(value) {
    this.setState({searchInput: value});
  };

  handleKeyPress(event) {
    if(event.key == 'Enter'){
      this.onSubmit();
    }
  }

  onSubmit() {
    if (this.state.searchInput) this.props.onSubmit(this.state.searchInput);
  }

  render() {
    const props = this.props;
    return (
      <div className={classnames('getsat-header-search-bar', props.className)}>
        <div className="getsat-header-search-bar__input">
          <Icon icon={searchIcon} className="getsat-header-search-bar__input__icon" />
          <TextInput
            type="search"
            onChange={this.saveSearchTerm}
            onKeyPress={this.handleKeyPress}
            placeholder={props.placeholder}
            value={this.state.searchInput}
            className="getsat-header-search-bar__input__form"
          />
        </div>
        <button className="getsat-header-search-bar__button" onClick={this.onSubmit}>
          <Icon icon={searchIcon} className="getsat-header-search-bar__button__icon" />
          <span className="getsat-header-search-bar__button__text">{'Search'}</span>
        </button>
      </div>
    )
  }
}

HeaderSearchBar.propTypes = {
  className: PropTypes.className,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func
};

HeaderSearchBar.defaultProps = {
  placeholder: "Search the community"
};

HeaderSearchBar.contextTypes = {
  location: PropTypes.object
};

module.exports = HeaderSearchBar;

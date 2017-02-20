const React = require('react');
const classnames = require('classnames');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const TextInput= require('../../atoms/TextInput');
const Button = require('../../atoms/Button');

require('./HeaderSearchBar.scss');

class HeaderSearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchInput: props.value
        };
    }

    render() {
        const props = this.props;
        return (
            <div className={classnames("getsat-header-search-bar", props.className)}>
                <TextInput
                    onChange={this.saveSearchTerm}
                    placeholder={props.placeholder}
                    value={this.state.searchInput}
                    className="getsat-header-search-bar_input"
                />
                <Button
                    text="Search"
                    onClick={this.onSubmit}
                    className="getsat-header-search-bar_button"
                />
            </div>
        )
    }

    saveSearchTerm = (value) => {
        this.setState({searchInput: value});
    };

    onSubmit = () => this.props.onSubmit(this.state.searchInput);
}


HeaderSearchBar.propTypes = {
    className: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string
    ]),
    style: PropTypes.object,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onSubmit: PropTypes.func
};

HeaderSearchBar.defaultProps = {
    placeholder: "Create or search a Topic."
};

module.exports = HeaderSearchBar;

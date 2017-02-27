const React = require('react');
const classnames = require('classnames');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const Button = require('spr-web-components/src/atoms/Button');
const FormField = require('spr-web-components/src/molecules/FormField');

import './SignIn.scss';

class SignIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    };

    this.onClick = this.onClick.bind(this);
  }

  changeState(key, value) {
    this.state.credentials[key] = value;
    this.setState(this.state);
  }

  onClick(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.credentials);
  }

  render() {
    return (
      <div className={classnames('getsat-signin', this.props.className)}>
        <div className="getsat-signin__header">
          <span className="getsat-signin__header__item is-active">{'Login'}</span>
        </div>

        <div className="getsat-signin__content">
          <form className="getsat-signin__form">
            <div className="getsat-signin__form__input">
              <label>Email</label>
              <FormField fieldType="TEXT" value={this.state.credentials.email} onChange={(value) => this.changeState('email', value)} />
            </div>
            <div className="getsat-signin__form__input">
              <label>Password</label>
              <FormField fieldType="PASSWORD" value={this.state.credentials.password} onChange={(value) => this.changeState('password', value)} />
            </div>
            <Button className="getsat-signin__form__button" text="Sign In" onClick={this.onClick} />
          </form>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  className: PropTypes.className,
  onSubmit: PropTypes.func,
};

module.exports = SignIn;

const React = require('react');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const configureStore = require('../../lib/configureStore');
const { reducer, login } = require('./reducer');
const { logged } = require('../../lib/Auth');

const SignIn = require('../SignIn');

class SignInContainer extends React.Component {
  constructor(props, context) {
    super(props);

    this.store = configureStore(reducer);
    this.redirect(context);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() =>
        this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  redirect(context) {
    if (logged()) {
      const path = context.location && context.location.query.returnTo ? context.location.query.returnTo : '/';
      context.router.push(path);
    }
  }

  onSubmit(credentials) {
    this.store.dispatch(login(credentials));
  }

  render() {
    this.redirect(this.context);

    return (
      <SignIn onSubmit={this.onSubmit} />
    );
  }
}

SignInContainer.contextTypes = {
  router: PropTypes.object,
  location: PropTypes.object
};

module.exports = SignInContainer;

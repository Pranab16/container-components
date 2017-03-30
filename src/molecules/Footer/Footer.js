const React = require('react');
const classnames = require('classnames');
const PropTypes = require('spr-web-components/src/lib/PropTypes');

const Button = require('spr-web-components/src/atoms/Button');

require('./Footer.scss');

const Footer = (props, { location, params }) => {
  const query = location && location.query.keyword ? location.query.keyword : '';

  return (
    <div className={classnames('getsat-footer', props.className)} style={props.style}>
      <div className="getsat-footer__static">
        <Button className="getsat-footer__back-button"
          url={`/launcher/${params.componentId}`}
          text={props.backButtonText} />
        <Button className="getsat-footer__ask-question-button"
          url={`${props.postQuestionUrl}${encodeURIComponent(query)}`}
          text={props.postQuestionText} />
      </div>
    </div>
  )
};

Footer.propTypes = {
  className: PropTypes.className,
  style: PropTypes.object,
  postQuestionText: PropTypes.string,
  postQuestionUrl: PropTypes.string,
  backButtonText: PropTypes.string
};

Footer.defaultProps = {
  postQuestionText: 'Post a Question',
  backButtonText: 'Popular Questions'
};

Footer.contextTypes = {
  location: PropTypes.object,
  params: PropTypes.object
};

module.exports = Footer;

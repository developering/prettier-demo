import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from 'everydollar/elem/CloseIcon';

import { FormattedHTMLMessage } from 'react-intl';
import { NOTIFICATION_TYPE } from 'everydollar/configs/constants';

let Notification = props => (
  <div className={props.className} onMouseOver={props.handleMouseOver} onMouseLeave={props.handleMouseLeave}>
    {props.linkMessageId && (
      <span className="Notification-action" onClick={props.handleLinkAction}>
        <FormattedHTMLMessage id={props.linkMessageId} values={props.linkMessageValues}/>
      </span>
    )}
    <span className="Notification-message">
      <FormattedHTMLMessage id={props.messageId} values={props.messageValues} />
    </span>
    <div className="Notification-close" onClick={props.handleClose}>
      <span className="sr-only">Close</span>
      <CloseIcon />
    </div>
  </div>
);

Notification.propTypes = {
  type: PropTypes.string,
  messageId: PropTypes.string.isRequired,
  messageValues: PropTypes.object,
  linkMessageId: PropTypes.string,
  linkMessageValues: PropTypes.object,
  className: PropTypes.string,
  handleClose: PropTypes.func,
  handleLinkAction: PropTypes.func,
  handleMouseOver: PropTypes.func,
  handleMouseLeave: PropTypes.func
};

Notification.defaultProps = {
  type: NOTIFICATION_TYPE.STANDARD,
  messageValues: {},
  linkMessageValues: {}
};

Notification.displayName = 'Notification';

export default Notification;

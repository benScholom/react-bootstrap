import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';

// TODO: `pullRight` doesn't belong here. There's no special handling here.

const propTypes = {
  pullRight: PropTypes.bool,
};

const defaultProps = {
  pullRight: false,
};
/**
 * @description
 * Easily highlight new or unread items by adding a `<Badge>` to links, Bootstrap navs, and more.
 *
 * @example
 * //Cross-browser compatibility
 * //Unlike in regular Bootstrap, badges self collapse even in Internet Explorer 8.
 *  const badgeInstance = (
 *  <p>Badges <Badge>42</Badge></p>
 * );
 *
 * ReactDOM.render(badgeInstance, mountNode);
 *
 *
 */
class Badge extends React.Component {
  hasContent(children) {
    let result = false;

    React.Children.forEach(children, child => {
      if (result) {
        return;
      }

      if (child || child === 0) {
        result = true;
      }
    });

    return result;
  }

  render() {
    const { pullRight, className, children, ...props } = this.props;
    const [bsProps, elementProps] = splitBsProps(props);

    const classes = {
      ...getClassSet(bsProps),
      'pull-right': pullRight,

      // Hack for collapsing on IE8.
      hidden: !this.hasContent(children),
    };

    return (
      <span
        {...elementProps}
        className={classNames(className, classes)}
      >
        {children}
      </span>
    );
  }
}

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default bsClass('badge', Badge);

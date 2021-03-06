import classNames from 'classnames';
import React from 'react';

import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';
/**
 * @description
 * A React component that allows combining sets of `<ButtonGroup>`s together on a single line.
 * For more info on Button Groups, see [here](https://bitsrc.io/react-bootstrap/react-bootstrap/buttons/button-group).
 *
 * @example
 * <ButtonToolbar>
 *    <ButtonGroup justified=true>
 *       <Button active=true href="http://example.com"></Button>
 *       <Button active=true onClick={onSecondButtonClick}></Button>
 *    </ButtonGroup>
 *    <ButtonGroup>
 *       <Button href="http://www.buttonslookingforlove.com"></Button>
 *    </ButtonGroup>
 * </ButtonToolbar>
 */
class ButtonToolbar extends React.Component {
  render() {
    const { className, ...props } = this.props;
    const [bsProps, elementProps] = splitBsProps(props);

    const classes = getClassSet(bsProps);

    return (
      <div
        {...elementProps}
        role="toolbar"
        className={classNames(className, classes)}
      />
    );
  }
}

export default bsClass('btn-toolbar', ButtonToolbar);

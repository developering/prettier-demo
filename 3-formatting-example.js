import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import { Dropdown } from 'everydollar/elem/Dropdown';
import classNames from 'classnames';
import _isFunction from 'lodash/isFunction';
import { ALIGN } from 'everydollar/configs/constants';

import './styles.scss';

export class DropdownContainer extends Component {
  static propTypes = {
    activeId: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    align: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  };

  render() {
    let className = classNames('Dropdown', {
      'Dropdown--isOpened': this.state.isOpen,
      'Dropdown--alignRight': this.props.align === ALIGN.RIGHT
    });

    return (
      <Dropdown
        options={this.props.options}
        activeId={this.props.activeId}
        className={className}
        handleClick={this.toggle}
        handleSelection={this.handleSelection}
      />
    );
  }
}

export default onClickOutside(DropdownContainer);

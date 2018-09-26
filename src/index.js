import React from 'react';

import './index.css';

class TextField extends React.Component {
  constructor() {
    super();

    this.focus = this.focus.bind(this);
  }

  focus() {
    this.input.focus();
  }

  render() {
    const { labelLeft, labelRight, placeholder, value, onChange } = this.props;

    return (
      <div className={'shadow_input_wrapper'} style={style}>
        {labelLeft && <div className={'shadow_input_label'}>{labelLeft}</div>}
        <input
          className={'shadow_input_input'}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          innerRef={input => {
            this.input = input;
          }}
        />
        {labelRight && <Label>{labelRight}</Label>}
      </div>
    );
  }
}

export default TextField;

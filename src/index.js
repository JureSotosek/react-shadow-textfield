import React from 'react';

const wrapperStyle = {
  boxSizing: 'border-box',
  padding: 7,
  borderRadius: 7,
  boxShadow: '0 5px 15px 0 rgba(37, 44, 97, 0.25)'
};

const inputStyle = {
  width: '100%',

  border: '0 solid',
  outline: 'none',

  backgroundColor: 'transparent',
  fontSize: 20
};

class TextField extends React.Component {
  constructor() {
    super();

    this.focus = this.focus.bind(this);
  }

  focus() {
    this.input.focus();
  }

  render() {
    const { className, style, placeholder, value, onChange } = this.props;

    return (
      <div style={{ ...wrapperStyle, ...style }} className={className}>
        <input
          style={inputStyle}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          ref={input => {
            this.input = input;
          }}
        />
      </div>
    );
  }
}

export default TextField;

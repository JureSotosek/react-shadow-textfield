import React from 'react';

const wrapperStyle = {
  minWidth: '100%',

  boxSizing: 'border-box',
  padding: 7,
  borderRadius: 7,
  boxShadow: '0 5px 15px 0 rgba(37, 44, 97, 0.25)',

  display: 'flex',
  flexDirection: 'row'
};

const labelStyle = {
  marginRight: 5,
  marginLeft: 5,
  fontSize: 20
};

const inputStyle = {
  width: '100%',

  border: '0 solid',
  outline: none,

  backgroundColor: transparent,
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
    const {
      className,
      style,
      labelLeft,
      labelRight,
      placeholder,
      value,
      onChange
    } = this.props;

    return (
      <Wrapper className={className} style={{ ...wrapperStyle, ...style }}>
        {labelLeft && <Label style={labelStyle}>{labelLeft}</Label>}
        <StyledInput
          style={inputStyle}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          innerRef={input => {
            this.input = input;
          }}
        />
        {labelRight && <Label>{labelRight}</Label>}
      </Wrapper>
    );
  }
}

export default TextField;

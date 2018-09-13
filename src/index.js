import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 100px;

  box-sizing: border-box;
  padding: 7px;
  border-radius: 7px;
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.25);

  display: flex;
  flex-direction: row;
`;

const Label = styled.div`
  margin-right: 5px;
  margin-left: 5px;
  font-size: 20px;
`;

const StyledInput = styled.input`
  width: 100%;

  border: 0 solid;
  outline: none;

  background-color: transparent;
  font-size: 20px;
`;

class InputField extends React.Component {
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
      label,
      placeholder,
      value,
      onChange
    } = this.props;

    return (
      <Wrapper className={className} style={style}>
        <Label>{label}</Label>
        <StyledInput
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          ref={input => {
            this.input = input;
          }}
        />
      </Wrapper>
    );
  }
}

export default InputField;

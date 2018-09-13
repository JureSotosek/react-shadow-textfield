# react-shadow-textfield

![NPM](https://img.shields.io/npm/v/react-shadow-textfield.svg?style=flat)

A textfield component with a shadow for React.

## Example

http://buildastack.io/builder/

## Install

```
$ yarn add react-shadow-textfield
```

## Usage

```js
import React from 'react';
import TextField from 'react-shadow-textfield';

const Example = () => (
  <div>
    <TextField labelLeft="🔎" placeholder="Search..." />
  </div>
);

export default Example;
```

## Props

### `labelLeft`

type: `string`

> A label/text on the left side of the text field.

### `labelRight`

type: `string`

> A label/text on the right side of the text field.

### `placeholder`

type: `string`

> Textfield placeholder.

### `value`

type: `string`

> Value of the inner input.

### `onChange`

type: `function`

> Called on input value change.

## License

MIT © [Jure Sotosek](https://github.com/JureSotosek)

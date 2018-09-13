import React from 'react';
import { render } from 'react-dom';
import InputField from '../src';

function Demo() {
  return (
    <div>
      <h1>TextField</h1>
      <InputField placeholder="WOOOW" value={'whats'} />
    </div>
  );
}

render(<Demo />, document.getElementById('app'));

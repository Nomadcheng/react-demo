require("react-hot-loader/patch");
import React from 'react';
import ReactDOM from 'react-dom';
// import Parent from './Parent.js';
import Test from './Test.js';

const render = (App) => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}

render(Test);

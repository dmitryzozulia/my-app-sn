import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { message: 'my first props', like: 10 },
  { message: 'my 2 props', like: 11 },
  { message: 'my 3 props', like: 14 },
  { message: 'my 4 props', like: 15 },
  { message: 'my 5 props', like: 11 },
];
let messages = [
  { id: 1, messageValue: 'abracadabra' },
  { id: 2, messageValue: 'ja sos bibu' },
  { id: 3, messageValue: 'ja sos b' }
];
let dialogs = [
  { id: 1, dialogName: 'Sanya' },
  { id: 2, dialogName: 'Danya' },
  { id: 3, dialogName: 'Vanya' },
  { id: 4, dialogName: 'Vanya' },
  { id: 5, dialogName: 'Dima' },
];
ReactDOM.render(
  <React.StrictMode >
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

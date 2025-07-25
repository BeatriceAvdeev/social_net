import React from 'react';
import ReactDOM from 'react-dom/client';
import state from "./Data/state";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state from './Data/state';
import { addPost, addMessage, onPostChange, onMessageChange, subscribe } from './Data/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} onPostChange={onPostChange} onMessageChange={onMessageChange} />
    </React.StrictMode>
  );
}

subscribe(rerenderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

rerenderTree(state)

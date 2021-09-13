import App from "./app";
import React from "react";
import ReactDOM from "react-dom";
import '../public-path';

function render(props) {
  const { container } = props;
  ReactDOM.render(<App />, container ? container.querySelector('#root2') : document.querySelector('#root2'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[app2] react app bootstraped');
}

export async function mount(props) {
  console.log('[app2] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root2') : document.querySelector('#root2'));
}
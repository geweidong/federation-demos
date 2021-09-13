import App from "./app";
import React from "react";
import ReactDOM from "react-dom";
import '../public-path';

function render(props) {
    const { container } = props;
    ReactDOM.render(<App />, container ? container.querySelector('#root1') : document.querySelector('#root1'));
}

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('[app1] react app bootstraped');
}

export async function mount(props) {
    console.log('[app1] props from main framework', props);
    render(props);
}

export async function unmount(props) {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root1') : document.querySelector('#root1'));
}
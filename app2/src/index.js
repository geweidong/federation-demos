// import App from "./app";
// import React from "react";
// import ReactDOM from "react-dom";

// import Button from './Button';
// import '../public-path';

// console.log('app2-index.js 执行了。。。。。。');
// function render(props) {
//     const { container } = props;
//     // ReactDOM.render(<App />, container ? container : document.querySelector('#root2'));
//     alert(Button);
// }

// if (!window.__POWERED_BY_QIANKUN__) {
//     render({});
// }

// export async function bootstrap() {
//     console.log('[app2] react app bootstraped');
// }

// export async function mount(props) {
//     console.log('[app2] props from main framework', props);
//     render(props);
// }

// export const zidingyi = 9909090;

// export async function unmount(props) {
//     const { container } = props;
//     // ReactDOM.unmountComponentAtNode(container ? container : document.querySelector('#root2'));
// }

const { bootstrap, mount, unmount } = await import('./bootstrap')
export { bootstrap, mount, unmount }

// import './bootstrap';
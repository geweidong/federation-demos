import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from 'qiankun';
import render from './react';
import './index.less';

render({ loading: true });

const loader = loading => render({ loading });

/**
 * Step2 注册子应用
 */

registerMicroApps(
  [
    {
      name: 'app1',
      entry: '//localhost:3001',
      container: '#subapp-viewport',
      loader,
      activeRule: '/app1',
    },
    {
      name: 'app2',
      entry: '//localhost:3002',
      container: '#subapp-viewport',
      loader,
      activeRule: '/app2',
    }
  ],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
);

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});

onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});


setDefaultMountApp('/app1');

/**
 * Step4 启动应用
 */
start({
  sandbox: false,
});

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});

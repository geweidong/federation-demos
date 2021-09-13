import React from "react";
import RemoteButton from "app2plus/Button";

const Header = React.lazy(() => import("../component/Header"));

const App = () => (
  <div>
    <h2>App 1</h2>
    <React.Suspense fallback="Loading Button">
      这是app2的代码模块：<RemoteButton />
    </React.Suspense>
    <React.Suspense fallback="加载中...">
    	<Header />
    </React.Suspense>
  </div>
);

export default App;
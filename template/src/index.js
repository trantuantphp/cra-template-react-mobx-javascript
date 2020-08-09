import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "utils/i18n";
import "antd/dist/antd.less";
import "styles/index.scss";
import * as serviceWorker from "utils/serviceWorker";
import MobxWrapper from "./mobxW";
import { ConfigProvider } from "antd";
import RouterWrapper from "routers";
import Loading from "components/Loading";
import CustomEmpty from "components/Empty";

(function start() {
  const App = () => (
    <Suspense fallback={<Loading />}>
      <MobxWrapper>
        <ConfigProvider renderEmpty={CustomEmpty}>
          <RouterWrapper />
        </ConfigProvider>
      </MobxWrapper>
    </Suspense>
  );
  serviceWorker.unregister();
  ReactDOM.render(<App />, document.getElementById("root"));
})();

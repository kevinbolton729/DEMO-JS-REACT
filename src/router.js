import { LocaleProvider, Spin } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';
import { routerRedux, Switch } from 'dva/router';
import React from 'react';
import { getRouterData } from './common/router';
import Authorized from './utils/Authorized';

// 样式
import styles from './static/index.less';

const { ConnectedRouter } = routerRedux;
const { AuthorizedRoute } = Authorized;

dynamic.setDefaultLoadingComponent(() => {
  return <Spin className={styles.globalSpin} />;
});

function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  const components = {
    UserLayout: routerData['/user'].component,
    BasicLayout: routerData['/'].component,
  };
  return (
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <Switch>
          <AuthorizedRoute
            path="/user"
            render={props => <components.UserLayout {...props} />}
            redirectPath="/"
          />
          <AuthorizedRoute
            path="/"
            render={props => <components.BasicLayout {...props} />}
            authority={['admin', 'user']}
            redirectPath="/user/login"
          />
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>
  );
}

export default RouterConfig;

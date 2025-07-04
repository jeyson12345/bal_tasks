import AntdProvider from './lib/antd';
import AosProvider from './lib/aos';
import ReduxProvider from './lib/redux';
import RouterProvider from './lib/router';

function App() {
  return (
    <ReduxProvider>
      <AntdProvider>
        <AosProvider>
          <RouterProvider />
        </AosProvider>
      </AntdProvider>
    </ReduxProvider>
  );
}

export default App;

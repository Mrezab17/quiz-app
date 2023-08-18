import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

import Navigator from "./components/Navigator";

import { Provider } from "react-redux";
import store from "./store/store";
import { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Navigator />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

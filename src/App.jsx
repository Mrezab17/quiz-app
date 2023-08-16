import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

import Navigator from "./components/Navigator";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  );
};

export default App;

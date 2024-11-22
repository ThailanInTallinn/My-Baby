import Routes from "./routes";
import AppProvider from "./Context";

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;

import { useState } from "react";

import "./App.css";
import Index from "./routes";
import AppProvider from "./Context";

function App() {
  return (
    <AppProvider>
      <Index />
    </AppProvider>
  );
}

export default App;

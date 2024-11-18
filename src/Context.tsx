import { createContext, useContext, useState } from "react";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextInterface {}

const AppContext = createContext<AppContextInterface | null>(null);

const mudarIdioma = () => {};

const showSnackMessage = (message) => {
  console.log(message);
};

const [snackOpen, setSnackOpen] = useState(false);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const sharedState = {
    mudarIdioma,
    showSnackMessage,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context == null) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppProvider;

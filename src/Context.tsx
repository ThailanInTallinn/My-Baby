import { Alert, Snackbar } from "@mui/material";
import { createContext, useContext, useState } from "react";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextInterface {}

const AppContext = createContext<AppContextInterface | null>(null);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");
  const timeOutDuration = 6000;

  const showSnackMessage = (message: string) => {
    setSnackMessage("Cliquei");
    setSnackOpen(true);

    setTimeout(() => {
      setSnackOpen(false);
      setSnackMessage("");
    }, 5000);
  };

  const handleClose = () => {
    setSnackOpen(false);
    setSnackMessage("");
  };

  const showAlertMessage = (message, severity) => {
    setAlertMessage(message);
    setAlertSeverity(severity);

    setTimeout(() => {
      setAlertMessage("");
      setAlertSeverity("");
    }, 4000);
  };
  const mudarIdioma = () => {};

  const sharedState = {
    mudarIdioma,
    showSnackMessage,
    showAlertMessage,
  };

  return (
    <AppContext.Provider value={sharedState}>
      {children}
      <Snackbar message={snackMessage} open={snackOpen} onClose={handleClose} />
      <Alert severity={alertSeverity}>{alertMessage}</Alert>
    </AppContext.Provider>
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

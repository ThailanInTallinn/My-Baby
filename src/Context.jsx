import { Alert, Grid2, Snackbar } from "@mui/material";
import { createClient } from "@supabase/supabase-js";
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const { t: translate, i18n } = useTranslation();
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");
  const timeOutDuration = 6000;
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );

  const showSnackMessage = (message) => {
    setSnackMessage("Cliquei");
    setSnackOpen(true);

    setTimeout(() => {
      setSnackOpen(false);
      setSnackMessage("");
    }, timeOutDuration);
  };

  const handleClose = () => {
    setSnackOpen(false);
    setSnackMessage("");
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const showAlertMessage = (message, severity) => {
    setAlertMessage(message);
    setAlertSeverity(severity);

    setTimeout(() => {
      setAlertMessage("");
      setAlertSeverity("");
    }, timeOutDuration);
  };

  useEffect(() => {
    const storeLanguage = localStorage.getItem("language");

    if (storeLanguage) {
      changeLanguage(storeLanguage);
    } else {
      const navLang = navigator.language.split("-");
      changeLanguage(navLang[0]);
    }
  }, []);

  const sharedState = {
    showSnackMessage,
    showAlertMessage,
    supabase,
    translate,
  };

  return (
    <div className="app-background">
      <AppContext.Provider value={sharedState}>
        {children}
        <Snackbar
          message={snackMessage}
          open={snackOpen}
          onClose={handleClose}
        />
        {alertMessage ? (
          <Grid2
            container={true}
            sx={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              padding: 2,
            }}
          >
            <Grid2 sx={{ width: "100%" }}>
              <Alert severity={alertSeverity}>{alertMessage}</Alert>
            </Grid2>
          </Grid2>
        ) : null}
      </AppContext.Provider>
    </div>
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

import logo from "./logo.svg";
import "./App.css";
import NavigationContainer from "./containers/NavigationContainer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <NavigationContainer></NavigationContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;

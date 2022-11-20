import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header.component";
import GlobalStyle from "./styles/globalStyles";
import light from "./styles/themes/light";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <div className="App">
        <Header />
        <h1>Coffee Delivery testes</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header.component";
import { Hero } from "./components/Hero/Hero.component";

import GlobalStyle from "./styles/globalStyles";
import light from "./styles/themes/light";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;

import { Checkout } from "./components/Checkout/Checkout.components";
import { CoffeeList } from "./components/CoffeeList/CoffeeList.component";
import { Header } from "./components/Header/Header.component";
import { Hero } from "./components/Hero/Hero.component";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Hero />
      <CoffeeList /> */}
      <Checkout />
    </div>
  );
}

export default App;

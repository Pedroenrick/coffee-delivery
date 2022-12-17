import { Checkout } from "./components/Checkout/Checkout.components";
import { CoffeeList } from "./components/CoffeeList/CoffeeList.component";
import { DeliverySuccess } from "./components/DeliverySuccess/DeliverySuccess.component";
import { Header } from "./components/Header/Header.component";
import { Hero } from "./components/Hero/Hero.component";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Hero />
      <CoffeeList />
      <Checkout /> */}
      <DeliverySuccess />
    </div>
  );
}

export default App;

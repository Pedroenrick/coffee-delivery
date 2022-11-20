import { CoffeeList } from "./components/CoffeeList/CoffeeList.component";
import { Header } from "./components/Header/Header.component";
import { Hero } from "./components/Hero/Hero.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CoffeeList />
    </div>
  );
}

export default App;

import { CoffeeList } from "../components/CoffeeList/CoffeeList.component";
import { Header } from "../components/Header/Header.component";
import { Hero } from "../components/Hero/Hero.component";

export function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Hero />
      <CoffeeList />
    </>
  );
}

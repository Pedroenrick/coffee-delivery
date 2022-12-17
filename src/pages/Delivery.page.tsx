import { DeliverySuccess } from "../components/DeliverySuccess/DeliverySuccess.component";
import { Header } from "../components/Header/Header.component";

export function Delivery(): JSX.Element {
  return (
    <>
      <Header />
      <DeliverySuccess />
    </>
  );
}
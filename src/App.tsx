import {
  Routes,
  Route
} from "react-router-dom";

import { Home } from "./pages/Home.page";
import { CheckoutPage } from "./pages/Checkout.page";
import { Delivery } from "./pages/Delivery.page";
import { NotFound } from "./pages/NotFound.page";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route index element={<Home />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

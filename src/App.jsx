import ViewCartButton from "./components/ViewCartButton";
import Product from "./components/Product";
import Cart from "./components/Cart";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <ViewCartButton />
      </header>
      <main>
        <Product />
        <Cart />
      </main>
    </>
  );
}

export default App;

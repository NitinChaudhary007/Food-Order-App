import React, { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Carts/Cart";
import "./App.css";

function App() {

  const [isShown, setIsShown] = useState(false);

  const showCartHandler = () => {
    setIsShown(true);
  };

  const hideCartHandler = () => {
    setIsShown(false);
  };

  return (
    <Fragment>
      {isShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;

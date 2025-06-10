import React, { Children } from "react";
import RouttingComp from "./Routing/RouttingComp";
import MyContext from "./ContextAPI/MyContext";
import ProviderFunc from "./ContextAPI/ProviderFunc";

export default function App() {
  return (
    <>
      <ProviderFunc>
        <RouttingComp />
      </ProviderFunc>
    </>
  );
}

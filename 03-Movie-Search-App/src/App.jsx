import React from "react";
import RoutingComp from "./Routing/RoutingComp";
import MyContext from "./ContextProvider/MyContext";
import { BrowserRouter } from "react-router";

export default function App() {

  const [n,setN] = React.useState("Jawan")
  const [r,setR] = React.useState("2023")

  return (
    <>
      <MyContext.Provider
        value={{n, setN, r, setR}}
      >

        <RoutingComp />

      </MyContext.Provider>
    </>
  );
}

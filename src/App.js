import React from "react";
import { StylesProvider } from "@material-ui/styles";
import { CssBaseline } from "../node_modules/@material-ui/core/index";
import GlobalStyle from "../../pwa-covid19/src/commons/styles/global-style";


function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline/>
      <GlobalStyle/>
      <div>
        Teste
      </div>
    </StylesProvider>
  );
}

export default App;

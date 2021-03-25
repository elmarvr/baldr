import type { AppProps } from "next/app";
import Head from "next/head";
import { Global as EmGlobal, css } from "@emotion/react";
import { GlobalStyles as TwGlobalStyles } from "twin.macro";

const EmGlobalStyles = () => (
  <EmGlobal
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
      @font-face {
        font-family: "Baldr";
        src: url("futura_black.ttf") format("truetype");
      }
    `}
  />
);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <EmGlobalStyles />
      <TwGlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;

import Head from "next/head";
import { GlobalStyles } from "twin.macro";
import { MarkdownProvider } from "../context/MarkdownContext";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <MarkdownProvider
        emails={pageProps.emails}
        phones={pageProps.telefoonnummers}
      >
        <Component {...pageProps} />
      </MarkdownProvider>
    </>
  );
};

export default App;

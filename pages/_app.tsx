import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { createClient, Provider } from "urql";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const client = createClient({
  url: "https://api-dev.kdconsulting.co.kr/graphql",
});
function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider value={client}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
import "../styles/styles.scss";
import { React } from "react";
import { Provider } from "react-redux";
import { store } from "../store/routes/store";
import MainLayout from "../components/layouts/MainLayout";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/apollo-client";
import { CartContextProvider } from "../context/context";

function MyApp({ Component, pageProps, ...appProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
      <CartContextProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </CartContextProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;

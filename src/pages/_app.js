import "../styles/styles.scss";
import { React } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/apollo-client";
import { CartContextProvider } from "../context/context";

function MyApp({ Component, pageProps, ...appProps }) {
  return (
    <ApolloProvider client={client}>
      <CartContextProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </CartContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;

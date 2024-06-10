"use client";

import { ApolloProvider } from "@apollo/client";
import { graphqlClient } from '../graphql/gql.setup';
// import { NextUIProvider } from '@nextui-org/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <NextUIProvider>
    <ApolloProvider client={graphqlClient}>{children}</ApolloProvider>
    // </NextUIProvider>
  );
}
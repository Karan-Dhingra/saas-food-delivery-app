'use client'

import React from 'react';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ApolloProvider } from '@apollo/client';
import { graphqlClient } from '../graphql/gql.setup';
import { SessionProvider } from 'next-auth/react';

export default function Provider({children} : {children: React.ReactNode}) {
  return (
    <ApolloProvider client={graphqlClient}>
      <SessionProvider>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark" >
          {children}
          </NextThemesProvider>
        </NextUIProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}
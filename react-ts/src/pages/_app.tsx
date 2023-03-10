import { useEffect } from 'react';
import type { FC } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { AuthConsumer, AuthProvider } from '../contexts/jwt-context';

type EnhancedAppProps = AppProps & {
  Component: NextPage;
};

const App: FC<EnhancedAppProps> = (props) => {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>I LOVE REACT !</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AuthProvider>
        <AuthConsumer>
          {(auth) =>
            !auth.isInitialized ? (
              <>Loading</>
            ) : (
              getLayout(<Component {...pageProps} />)
            )
          }
        </AuthConsumer>
      </AuthProvider>
    </>
  );
};

export default App;

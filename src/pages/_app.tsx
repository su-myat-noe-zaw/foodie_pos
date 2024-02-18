// _app.tsx

import React, { useState } from 'react';
import { store } from '@/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import Layout from '@/components/Layout';
import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from '@/utils/theme';
import { ThemeContext } from '@/utils/themeContext';

interface MyAppProps {
  Component: React.ComponentType;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme.palette.mode === 'light' ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SessionProvider>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </Provider>
      </SessionProvider>
    </ThemeContext.Provider>

  );
}

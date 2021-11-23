import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Head from 'next/Head';
import theme from '../lib/themes';
import createEmotionCache from '../lib/createEmotionCache';
import '../lib/global_styles.css'


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

function MyApp(props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <CssBaseline />
        <Header {...pageProps} />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = propTypes;



export default MyApp;

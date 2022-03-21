import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider} from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import {GlobalStyles} from "@mui/material";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {GetBestSellersPage, GetComingSoon, GetLatestPage} from "../queries/API";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
import apolloClient from "../src/apollo-client";
import {FavouritesContext, FavouritesHook} from "../hooks/useFavourites";

export default function MyApp(props) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

    const favourites = FavouritesHook();

    return (<CacheProvider value={emotionCache}>
        <ApolloProvider client={apolloClient}>
            <FavouritesContext.Provider value={favourites}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <GlobalStyles styles={{
                    ".round-item": {
                        borderRadius: 7,
                        border: '1px solid #333 !important'
                    },
                    '.cast-shadow': {
                        boxShadow: '4px 4px 2px #000'
                    }
                }}/>
                <Component {...pageProps} />
            </ThemeProvider>
            </FavouritesContext.Provider>
        </ApolloProvider>
    </CacheProvider>);
}
import Head from 'next/head'
import Image from 'next/image'
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import {Box} from "@mui/material";
import Carousel from "../components/Carousel";
import UserBooks from "../components/UserBooks";
import BooksCatalogue from "../components/BooksCatalogue";
import Flex from "../components/Flex";
import {ApolloClient, InMemoryCache, gql} from "@apollo/client";
import {GetBestSellersPage, GetComingSoon, GetLatestPage} from "../queries/API";
import apolloClient from "../src/apollo-client";

export default function Home(media) {
    return (
        <>
        <Box pb={12} >
            <Header py={2} mb={4}/>
            <UserBooks py={2}/>
            <BooksCatalogue mt={4} media={media}/>
        </Box>
        <Navigation/>
    </>
    )
}

export async function getStaticProps() {
    const bestSellers = await apolloClient.query(GetBestSellersPage(1));
    const latest = await apolloClient.query(GetLatestPage(1));
    const comingSoon = await apolloClient.query(GetComingSoon(1));

    return {
        props: {
            bestSellers: bestSellers.data.Page.media,
            latest: latest.data.Page.media,
            comingSoon: comingSoon.data.Page.media,
        },
    };


}
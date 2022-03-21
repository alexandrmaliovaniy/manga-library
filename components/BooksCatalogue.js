import {Box, Stack, useTheme} from "@mui/material";
import {useEffect, useMemo, useState} from "react";
import BookListItem from "./BookListItem";
import useInView from "react-cool-inview";
import {GetBestSellersPage, GetComingSoon, GetLatestPage} from "../queries/API";
import {useLazyQuery, useQuery} from "@apollo/client";
import {useBooks} from "../hooks/useBooks";



const BooksCatalogue = ({media, ...props}) => {

    const theme = useTheme();

    const {categories, ...books} = useBooks(media);

    return (
        <Box px={2} {...props}>
            <Stack direction={'row'} spacing={2} mb={2}>
                {
                    categories.map(el => (
                        <Box
                            key={el.id}
                            onClick={() => books.changeCategory(el.id)}
                            sx={{
                                color: el.id === books.selectedCategory ? '#fff' : theme.palette.secondary.contrastText,
                                cursor: 'pointer',
                                width: '100%',
                                fontSize: 14
                            }}
                        >{el.name}</Box>
                    ))
                }
            </Stack>
            <Stack direction={'column'} spacing={2}>
                {books.categoryData.map(item => (
                    <BookListItem key={item.id} {...item} />
                ))}


            </Stack>
            <Box sx={{
                position: 'relative',
                left: 0,
                height: 0,
                bottom: 0,
                visibility: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: -500,
                    height: 500,
                    width: '100%',
                    background: 'rgba(0, 0, 0, 0.5)'
                }} ref={books.observe}>

                </div>
            </Box>
        </Box>
    )
}

export default BooksCatalogue;
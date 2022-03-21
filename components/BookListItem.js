import {Box, Grid, IconButton, Stack, Typography, useTheme} from "@mui/material";
import Image from 'next/image';
import Flex from "./Flex";
import BookmarkIcon from '@mui/icons-material/BookmarkBorderRounded';
import CheckedBookmarkIcon from '@mui/icons-material/BookmarkRounded';
import StarIcon from '@mui/icons-material/StarBorderRounded';
import UserIcon from '@mui/icons-material/PersonOutlineRounded';
import { useRouter } from 'next/router'
import GenreTag from "./GenreTag";
import {useFavourites} from "../hooks/useFavourites";

const genreTabs = [
    'info', 'error', 'success', 'warn'
]

const Bookmark = ({item}) => {
    const theme = useTheme();
    const favourite = useFavourites();
    return (
        <IconButton sx={{color: '#fff'}} onClick={() => favourite.toggle(item)}>
            {
                favourite.isFavourite(item.id) ?
                    <CheckedBookmarkIcon sx={{color: theme.palette.secondary.contrastText}}/>
                    :
                    <BookmarkIcon sx={{color: theme.palette.secondary.contrastText}}/>
            }

        </IconButton>
    )
}

const BookListItem = (item) => {
    const {id, title, genres, averageScore, favourites, staff, coverImage} = item;
    const router = useRouter();
    const theme = useTheme();

    const width = 460 / 5;
    const height = 650 / 5;
    return (
        <Stack direction={'row'}>
            <Box mr={2} sx={{
                width: width,
                flexBasis: width,
                flexGrow: 0,
                flexShrink: 0
            }}>
                <Image
                    width={width}
                    height={height}
                    className={'round-item'}
                    src={coverImage.medium}
                />
            </Box>
            <Flex direction={'column'} justify={'space-around'} sx={{
                width: "100%"
            }}>
                <Flex direction={'column'}>
                    <Typography component={'h1'} fontSize={14} sx={{
                        color: '#fff',
                        cursor: 'pointer'
                    }} onClick={()=>router.push(`/book/${id}`)}>
                        {title.userPreferred}
                    </Typography>
                    <Typography component={'h2'} fontSize={12} sx={{
                        color: theme.palette.secondary.contrastText
                    }} mb={1.5}>
                        {staff.nodes && staff.nodes[0] && staff.nodes[0].name.userPreferred}
                    </Typography>

                    <Flex>
                        <Flex mr={2} align={'center'}>
                            <StarIcon sx={{fontSize: 20, color: theme.palette.primary.contrastText}}/>
                            <Typography fontSize={12} ml={0.5} color={'secondary.contrastText'}>
                                {averageScore / 10}
                            </Typography>
                        </Flex>
                        <Flex align={'center'}>
                            <UserIcon sx={{fontSize: 20, color: theme.palette.primary.contrastText}}/>
                            <Typography fontSize={12} ml={0.5} color={'secondary.contrastText'}>
                                {favourites}
                            </Typography>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex direction={'row'} mt={1} sx={{
                    flexWrap: 'wrap'
                }}>
                    {
                        genres.slice(0, 5).map((genre, i) => <GenreTag key={i} label={genre} type={genreTabs[i % 4]} />)
                    }
                </Flex>
            </Flex>
            <Flex>
                <Bookmark item={item} />
            </Flex>
        </Stack>
    )
}
export default BookListItem;
import {Box, Typography, useTheme} from "@mui/material";
import Image from 'next/image';
import StarIcon from '@mui/icons-material/StarBorderRounded';
import UserIcon from '@mui/icons-material/PersonOutlineRounded';
import Flex from "./Flex";
import {useFavourites} from "../hooks/useFavourites";
import {useRouter} from "next/router";
const BookCarouselItem = (item) => {
    const {id, title, genres, averageScore, favourites, staff, coverImage} = item;
    const theme = useTheme();
    const width = 460 / 3.5;
    const height = 650 / 3.5;
    const router = useRouter();
    return (
        <Box onClick={() => router.push(`/book/${id}`)} style={{
            display: 'flex',
            flexDirection: 'column',
            width: width,
            flexBasis: width,
            flexGrow: 0,
            flexShrink: 0,
        }}>
            <Image
                width={width}
                height={height}
                className={'round-item'}
                src={coverImage.medium}
            />
            <Flex mt={1.5} >
                <Flex mr={2} align={'center'}>
                    <StarIcon sx={{fontSize: 16, color: theme.palette.primary.contrastText}} />
                    <Typography fontSize={12} ml={0.5} color={'secondary.contrastText'}>
                        {averageScore / 10}
                    </Typography>
                </Flex>
                <Flex align={'center'}>
                    <UserIcon sx={{fontSize: 16, color: theme.palette.primary.contrastText}} />
                    <Typography fontSize={12} ml={0.5} color={'secondary.contrastText'}>
                        {favourites}
                    </Typography>
                </Flex>
            </Flex>
        </Box>
    )
}

export default BookCarouselItem;
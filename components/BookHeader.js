import Flex from "./Flex";
import BackIcon from '@mui/icons-material/ArrowRightAltRounded';
import MoreIcon from '@mui/icons-material/MoreHorizRounded';
import {Button, Divider, IconButton, Stack, Typography, useTheme} from "@mui/material";
import BookmarkIcon from '@mui/icons-material/BookmarkBorderRounded';
import Image from 'next/image';
import {useRouter} from 'next/router';

const BookNav = () => {
    const router = useRouter();
    return (
        <Flex justify={'space-between'} px={2} align={'center'} sx={{
            position: 'absolute',
            width: "100%",
            top: 20,
            textShadow: '1px 1px 1px #000',
            left: 0,
            color: '#fff',
            zIndex: 10
        }}>
            <IconButton onClick={() => router.back()} sx={{color: '#fff', transform: 'scale(-1, 1)'}} size={'large'}>
                <BackIcon/>
            </IconButton>
            <Typography fontSize={12}>
                Detail Book
            </Typography>
            <IconButton sx={{color: '#fff', transform: 'scale(-1, 1)'}} size={'large'}>
                <MoreIcon/>
            </IconButton>
        </Flex>
    )
}

const BookHeader = (item) => {
    const width = 460 / 3.5;
    const height = 650 / 3.5;
    return (
        <>
            <BookNav />
            <Flex direction={'column'} align={'center'} pt={8} pb={4} justify={'center'} sx={{
                // height: 'calc(100vh - 220px)',
                // maxHeight: 500,
                height: 500,
                backgroundImage: `url(${item.bannerImage})`,
                backgroundSize: 'auto 100%',
                backgroundPosition: 'center',
                color: '#fff',
                overflowY: 'auto',
                textShadow: '1px 1px 2px #000'
            }}>
                <Flex direction={'column'} align={'center'}>
                    <Flex  id={'123'} sx={{
                        borderRadius: 1,
                        overflow: 'hidden',
                        boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)'
                    }}>
                        <Image
                            width={width}
                            height={height}
                            src={item.coverImage.large}
                        />
                    </Flex>
                    <Typography mt={2}>
                        {item.title.userPreferred}
                    </Typography>
                    <Typography fontSize={12} mt={0.5}>
                        {item.staff && item.staff.nodes && item.staff.nodes[0] && item.staff.nodes[0].name.userPreferred}
                    </Typography>
                </Flex>
                <Stack
                    divider={<Divider orientation="vertical" sx={{
                        borderColor: 'rgba(255,255,255,0.5)'
                    }} flexItem />}
                    px={3} py={2} mt={2} direction={'row'} spacing={3} sx={{
                    background: 'rgba(0, 0, 0, 0.8)',
                    borderRadius: 2
                }}>
                    <Flex px={1} direction={'column'} align={'center'} justify={'center'}>
                        <Typography fontSize={14}>{item.averageScore / 10}</Typography>
                        <Typography fontSize={10}>Score</Typography>
                    </Flex>
                    <Flex px={1} direction={'column'} align={'center'} justify={'center'}>
                        <Typography fontSize={14}>{item.status}</Typography>
                        <Typography fontSize={10}>Status</Typography>
                    </Flex>
                    <Flex px={1} direction={'column'} align={'center'} justify={'center'}>
                        <Typography fontSize={14}>{item.favourites}</Typography>
                        <Typography fontSize={10}>Favourites</Typography>
                    </Flex>
                </Stack>
            </Flex>
        </>
    )

}
export default BookHeader;
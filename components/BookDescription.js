import {Button, Stack, Typography, useTheme} from "@mui/material";
import Flex from "./Flex";
import BookmarkIcon from "@mui/icons-material/BookmarkBorderRounded";
import {useFavourites} from "../hooks/useFavourites";
import CheckedBookmarkIcon from '@mui/icons-material/BookmarkRounded';

const BookDescription = (item) => {
    const {description, id} = item;
    const theme = useTheme();
    const favourite = useFavourites();
    return (
        <Flex direction={'column'} py={2} sx={{
            position: 'absolute',
            width: "100%",
            // Height: 220,
            height: 'calc(100vh - 500px)',
            left: 0,
            bottom: 0,
            background: theme.palette.primary.main,
            boxShadow: "0 -10px 10px rgba(0, 0, 0, 0.2)",
            borderTop: `2px solid ${theme.palette.secondary.main}`,
            zIndex: 11,
        }}>
            <Flex direction={'column'} mx={2} pr={2} sx={{
                height: 'calc(100% - 50px)',
                overflowY: 'auto',
                color: '#fff'
            }}>
                <Typography py={1}>
                    Description
                </Typography>
                <Flex pb={6} sx={{
                    fontSize: 12,
                    color: theme.palette.secondary.contrastText
                }}>
                    <div dangerouslySetInnerHTML={{__html: item.description}}></div>
                </Flex>



            </Flex>
            <Stack direction={'row'} spacing={2} alignItems={'center'} px={2} sx={{
                height: 60,
                width: '100%',
                background: theme.palette.primary.main,
                boxShadow: `0 -20px 10px ${theme.palette.primary.main}`
            }}>
                <Button onClick={() => favourite.toggle(item)} variant={'contained'} sx={{
                    width: 50,
                    height: 50,
                    minWidth: 50,
                    borderRadius: 3,
                    background: theme.palette.secondary.main,

                }}>
                    {
                        favourite.isFavourite(id) ?
                            <BookmarkIcon sx={{color: theme.palette.secondary.contrastText}} />
                            :
                            <CheckedBookmarkIcon sx={{color: theme.palette.secondary.contrastText}} />
                    }

                </Button>
                <Button variant={'contained'} sx={{
                    width: '100%',
                    height: 50,
                    borderRadius: 2,
                    background: theme.palette.orange.main,
                    color: '#fff'
                }}>
                    Start Reading
                </Button>
            </Stack>
        </Flex>
    )
}
export default BookDescription;
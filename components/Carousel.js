import {Box, Container, Stack} from "@mui/material";
import BookCarouselItem from "./BookCarouselItem";
import {useFavourites} from "../hooks/useFavourites";

const Carousel = ({children}) => {
    const {list} = useFavourites();
    return (
        <Box sx={{

        }}>
            <Stack direction={'row'} spacing={2} sx={{
                width: "100%",
                scrollbarWidth: "none",
                overflowX: 'scroll',
                "&::-webkit-scrollbar": {
                    display: "none"
                }
            }}>
                <Box></Box>
                {
                    list.map(item => <BookCarouselItem key={item.id} {...item} />)
                }
                <Box></Box>
            </Stack>
        </Box>
    )
}

// .example::-webkit-scrollbar {
//     display: none;
// }
//
// /* Hide scrollbar for IE, Edge and Firefox */
// .example {
//     -ms-overflow-style: none;  /* IE and Edge */
//     scrollbar-width: none;  /* Firefox */
// }

export default  Carousel;
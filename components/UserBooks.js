import {Box, Typography, useTheme} from "@mui/material";
import Flex from "./Flex";
import Carousel from "./Carousel";

const UserBooks = () => {

    const theme = useTheme();

    return (
        <Box>
            <Flex mx={2} py={2} justify={'space-between'} align={'center'}>
                <Typography fontSize={16} sx={{color: '#fff'}}>
                    My Book
                </Typography>
                <Typography fontSize={10} sx={{color: theme.palette.secondary.contrastText, textDecoration: 'underline'}}>
                    see more
                </Typography>
            </Flex>
            <Carousel />
        </Box>
    )
}

export default UserBooks;
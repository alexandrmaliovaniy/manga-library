import {Avatar, Box, Chip, Container, Stack, Typography, useTheme} from "@mui/material";
import PointIcon from '@mui/icons-material/AttachMoneyRounded';
const Header = (props) => {

    const theme = useTheme();

    return (
        <Box px={2} sx={{
            display: 'flex',
            flexDirection: 'row',
            color: '#fff',
            justifyContent: 'space-between',
            alignItems: 'end'
        }} {...props} >
            <Stack direction={'column'}>
                <Typography fontSize={12} component={'h2'} variant={'h1'}>
                    Good Morning
                </Typography>
                <Typography fontSize={14} component={'h1'} mt={1} variant={'h4'}>
                    John Dou
                </Typography>
            </Stack>
            <Box>
                <Chip
                    sx={{
                        background: theme.palette.orange.main,
                        color: '#fff',
                        fontSize: 10,
                        cursor: 'pointer'
                    }}
                    label={(
                        <Typography
                            fontSize={9}
                        >
                            <Typography fontSize={9} fontWeight={'bold'} component={'span'}>240</Typography> points
                        </Typography>)}
                    avatar={<Avatar sx={{
                        background: theme.palette.orange.contrastText
                    }}><PointIcon sx={{color: "#fff", fontSize: 16}} /></Avatar>}
                />
            </Box>
        </Box>
    );
}

export default Header;
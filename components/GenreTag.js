import Flex from "./Flex";
import {useTheme} from "@mui/material";


const GenreTag = ({label = '', type='info'}) => {
    const theme = useTheme();
    const styles = {
        info: {
            background: theme.palette.info.main,
            color: theme.palette.info.contrastText,
        },
        error: {
            background: theme.palette.error.main,
            color: theme.palette.error.contrastText,
        },
        success: {
            background: theme.palette.success.main,
            color: theme.palette.success.contrastText,
        },
        warn: {
            background: theme.palette.orange.main,
            color: '#ffcda4',
        }
    }

    return (
        <Flex align={'center'} justify={'center'} px={1} mb={1} mr={1} py={0.5} sx={{
            fontSize: 12,
            borderRadius: 1,
            ...styles[type]
        }}>
            {label}
        </Flex>
    )
}

export default GenreTag;
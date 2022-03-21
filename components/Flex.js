import {Box} from "@mui/material";

const Flex = ({children, sx = {}, align = 'start', justify = 'start', direction = 'row', ...props}) => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: align,
            justifyContent: justify,
            flexDirection: direction,
            ...sx
        }} {...props}>
            {children}
        </Box>
    )
}

export default Flex;
import {Box, Container, Stack, useTheme, BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import HomeIcon from '@mui/icons-material/WidgetsRounded';
import SearchIcon from '@mui/icons-material/SearchRounded';
import NotificationIcon from '@mui/icons-material/NotificationsNoneRounded';
import MenuIcon from '@mui/icons-material/MenuRounded';
import {useState} from "react";


const MenuList = [
    {
        label: "Home",
        icon: <HomeIcon/>
    },
    {
        label: "Search",
        icon: <SearchIcon/>
    },
    {
        label: "Notifications",
        icon: <NotificationIcon/>
    },
    {
        label: "Menu",
        icon: <MenuIcon/>
    }
]

const Navigation = () => {
    const theme = useTheme();
    const [page, setPage] = useState(0);

    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation
                value={page}
                onChange={(event, newValue) => setPage(newValue)}
                sx={{
                    background: theme.palette.primary.main
                }}
            >
                {
                    MenuList.map(el => (
                        <BottomNavigationAction
                            key={el.label}
                            label={el.label}
                            icon={el.icon}
                            sx={{
                                color: theme.palette.secondary.contrastText,
                                "&.Mui-selected": {
                                    color: '#fff'
                                }
                            }}
                        />
                    ))
                }
            </BottomNavigation>
        </Paper>
    )
}

export default Navigation;
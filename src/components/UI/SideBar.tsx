import React from 'react';
import {Box, Button, Drawer, ListItem, List, ListItemButton, IconButton, ListItemText} from "@mui/material";
import icon from '../../assets/route.png'
import endless from '../../assets/endless.png'
import menu from '../../assets/menu.png'
import style from '../styles/sidebar.module.css'
import {chooseLevelType} from "../../redux/gameSlice";

type props = {
    levelSelector: (chosen: chooseLevelType)=> void
}
const SideBar: React.FC<props> = ({levelSelector}) => {

    const selectLevel = (x: number) => {
        levelSelector({level: x})
    }

    type Anchor = 'right';
    const [state, setState] = React.useState({
        right: false,
    });
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({...state, [anchor]: open});
            };
    const list = (anchor: Anchor) => (
        <Box
            sx={{width: 250, background: 'white'}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <List>
                {['Choose level', 'First Level', 'Second Level', 'Third Level', 'Endless Mode'].map((text, index) => (
                    index === 0 ?
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            fontSize='25px'
                            marginBottom='5px'
                        >
                            <h1>Choose level</h1>
                        </Box>
                        :
                        <ListItem key={index} disablePadding>
                            <ListItemButton onClick={()=>selectLevel(index)}>
                                {
                                    text !== 'Endless Mode' ?
                                        <img className={style.img} src={icon}/>
                                        :
                                        <img className={style.img} src={endless}/>
                                }
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <div>

            <Button sx={{position: 'absolute', top: '1vh', right: '2vh'}} onClick={toggleDrawer('right', true)}>
                <img className={style.menu} src={menu}/>
            </Button>
            <Drawer
                anchor='right'
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </div>
    );
};

export default SideBar;
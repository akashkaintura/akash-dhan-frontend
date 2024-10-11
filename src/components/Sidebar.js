import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, PieChart, TrendingUp, Settings } from '@mui/icons-material';

function Sidebar() {
    return (
        <Drawer variant="permanent" sx={{ width: 240, '& .MuiDrawer-paper': { width: 240 } }}>
            <List>
                <ListItem button>
                    <ListItemIcon><Home /></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><TrendingUp /></ListItemIcon>
                    <ListItemText primary="Portfolio" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><PieChart /></ListItemIcon>
                    <ListItemText primary="MTM" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><Settings /></ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default Sidebar;

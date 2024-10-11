import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import PortfolioCard from './PortfolioCard';
import MTMCard from './MTMCard';
import ActivityFeed from './ActivityFeed';

function Dashboard() {
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            {/* Header */}
            <Box component="header" sx={{ mb: 4 }}>
                <Typography variant="h4" align="center">Akash-DHAN Dashboard</Typography>
            </Box>

            {/* Grid layout */}
            <Grid container spacing={3}>
                {/* Portfolio Card - Full width on mobile, half on desktop */}
                <Grid item xs={12} sm={6} md={6}>
                    <PortfolioCard />
                </Grid>

                {/* MTM Card - Full width on mobile, half on desktop */}
                <Grid item xs={12} sm={6} md={6}>
                    <MTMCard />
                </Grid>

                {/* Activity Feed - Full width on all screens */}
                <Grid item xs={12}>
                    <ActivityFeed />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Dashboard;

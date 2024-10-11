import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function PortfolioCard() {
    const [portfolioData, setPortfolioData] = useState(null);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:5000');

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.event === 'portfolioUpdate') {
                setPortfolioData(data.data);
            }
        };

        ws.onopen = () => {
            console.log('WebSocket connection established');
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">Portfolio</Typography>
                <Typography variant="body2" color="textSecondary">
                    {portfolioData ? JSON.stringify(portfolioData) : 'Loading...'}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default PortfolioCard;

import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Typography } from '@mui/material';

const BookedItems = () => {
    return (
        <>
            <MainCard title="Booked Items">
                <Typography variant="body2">Welcome to Booked Items Page</Typography>
            </MainCard>
        </>
    );
};
export default BookedItems;

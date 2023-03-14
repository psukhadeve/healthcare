import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import MainCard from 'ui-component/cards/MainCard';
import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';

const BookedItems = () => {
    const dispatch = useDispatch();

    const [List, setList] = useState([]);

    useEffect(() => {
        dispatch({ type: 'LISTED_ITEMS' });
    }, []);

    const all_Listed_Items = useSelector((state: any) => state?.ListedItemsReducer?.listedItems?.data);
    console.log('all_Listed_Items out', all_Listed_Items);
    useEffect(() => {
        if (all_Listed_Items === undefined) {
            return;
        } else {
            console.log('all_Listed_Items useEffect', all_Listed_Items);
            let newRow = all_Listed_Items.map((values: any, index: any) => ({ ...values, id: index + 1 }));

            setList(newRow);
        }
    }, [all_Listed_Items]);

    return (
        <>
            <MainCard title="Listed Products">
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: 'auto'
                    }}
                >
                    {List.map((list: any, index: any) => (
                        <Card sx={{ display: 'flex', background: '#f5f6fa', width: 400, m: 2 }}>
                            <Avatar
                                alt="product pic"
                                sx={{ width: '40%', height: 'auto' }}
                                variant="rounded"
                                src={`${list?.base_uri}${list?.img_name[0]}`}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        {`${list?.name}`}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {`${list?.type}`}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Availability : {`${list?.from_date} to ${list?.to_date}`}
                                    </Typography>
                                </CardContent>

                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
                            </Box>
                        </Card>
                    ))}
                </div>
            </MainCard>
        </>
    );
};
export default BookedItems;

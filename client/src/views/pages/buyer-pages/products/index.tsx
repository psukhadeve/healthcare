import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import MainCard from 'ui-component/cards/MainCard';
import { Avatar, Paper, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { wrap } from 'module';

const ProductsForSell = () => {
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

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 180 },
        { field: 'type', headerName: 'Type', width: 120 },
        { field: 'from_date', headerName: 'From Date', width: 180 },
        {
            field: 'to_date',
            headerName: 'To Date',
            type: 'number',
            width: 180
        },
        {
            field: 'image_name',
            headerName: 'Image',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 180,
            valueGetter: (params: GridValueGetterParams) => `${params.row.name || ''}`
        }
    ];
    // const rows: any = [];

    const rows = [
        { id: 1, name: 'Snow', type: 'Jon', from_date: '20/12/2022', to_date: '22/12/2022', image_name: '' },
        { id: 2, name: 'Snow', type: 'Jon', from_date: '20/12/2022', to_date: '22/12/2022', image_name: '' },
        { id: 3, name: 'Snow', type: 'Jon', from_date: '20/12/2022', to_date: '22/12/2022', image_name: '' },
        { id: 4, name: 'Snow', type: 'Jon', from_date: '20/12/2022', to_date: '22/12/2022', image_name: '' },
        { id: 5, name: 'Snow', type: 'Jon', from_date: '20/12/2022', to_date: '22/12/2022', image_name: '' },
        { id: 6, name: 'Snow', type: 'Jon', from_date: '20/12/2022', to_date: '22/12/2022', image_name: '' },
        { id: 6, name: 'Snow', type: 'Jon', from_date: '20/12/2022', to_date: '22/12/2022', image_name: '' },
        { id: 6, name: 'Snow', type: 'Jon', from_date: '20/12/2022', to_date: '22/12/2022', image_name: '' },
        { id: 6, name: 'Snow', type: 'Jon', from_date: '20/12/2022', to_date: '22/12/2022', image_name: '' }
    ];

    return (
        <>
            <MainCard title="Listed Products">
                <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: 'auto' }}>
                    {List.map((values: any, index: any) => {
                        return (
                            <Card sx={{ maxWidth: 282, border: '1px solid #bdc3c7', margin: 1 }}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    // image="https://www.bangaloreagrico.in/wp-content/uploads/2018/01/apple-plant-bangalore-agrico.jpg"
                                    image={`${values?.base_uri}${values?.img_name[0]}`}
                                    title="green iguana"
                                />
                                <CardContent sx={{ width: 282 }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {values?.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {values?.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Buy Now</Button>
                                </CardActions>
                            </Card>
                        );
                    })}
                </div>
            </MainCard>
        </>
    );
};
export default ProductsForSell;

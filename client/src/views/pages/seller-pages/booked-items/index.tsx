import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import MainCard from 'ui-component/cards/MainCard';

const BookedItems = () => {
    const dispatch = useDispatch();

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
            <MainCard title="Booked Items">
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection={false} />
                </div>
            </MainCard>
        </>
    );
};
export default BookedItems;

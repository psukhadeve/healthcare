import React, { useState } from 'react';
import {
    Button,
    Grid,
    AppBar,
    Box,
    Toolbar,
    MenuItem,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './roles.css';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const Roles: React.FC<{}> = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {/* ======================================================= */}

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <MenuItem onClick={handleClickOpen}>
                            <span style={{ color: 'rgb(0, 97, 66)', fontWeight: 600 }}> Sign Up</span>
                        </MenuItem>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* ================================================================ */}

            <div>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    fullScreen={true}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            <div style={{ marginTop: '18%' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={2}></Grid>
                                    <Grid item xs={3} style={{ textAlign: 'right' }}>
                                        <Link
                                            to="/signup/1"
                                            style={{
                                                color: '#000',
                                                // marginRight: "100px",
                                                fontSize: '36px'
                                            }}
                                        >
                                            Signup as Seller
                                        </Link>
                                    </Grid>
                                    <Grid item xs={2}></Grid>
                                    <Grid item xs={3} style={{ textAlign: 'left' }}>
                                        <Link to="/signup/0" style={{ color: '#000', fontSize: '36px' }}>
                                            Signup as Buyer
                                        </Link>
                                    </Grid>
                                    <Grid item xs={2}></Grid>
                                </Grid>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>
                            <span style={{ color: 'rgb(0, 97, 66)', fontWeight: 600 }}>Close</span>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
};
export default Roles;

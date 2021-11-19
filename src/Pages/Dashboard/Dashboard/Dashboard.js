import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from './../../../hooks/useAuth';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import GiveReview from '../GiveReview/GiveReview';
import Pay from '../Pay/Pay';

const drawerWidth = 200;

function Dashboard(props) {
    const { logout } = useAuth();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            {!admin && <Box>
                <Divider />
                <NavLink className="text-decoration-none text-danger" to='/home'><Button color="inherit">Go Home</Button></NavLink>
                <Divider />
                <NavLink className="text-decoration-none text-danger" to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></NavLink>
                <Divider />
                <NavLink className="text-decoration-none text-danger" to={`${url}/giveReview`}><Button color="inherit">Give Review</Button></NavLink>
                <Divider />
                <NavLink className="text-decoration-none text-danger" to={`${url}/pay`}><Button color="inherit">Payment</Button></NavLink>
                <Divider />
                <NavLink className="text-decoration-none text-danger" to="/home"><Button onClick={logout} color="inherit">Log Out</Button></NavLink>
                <Divider />
            </Box>}
            {admin && <Box>
                <Divider />
                <NavLink className="text-decoration-none text-danger" to='/home'><Button color="inherit">Go Home</Button></NavLink>
                <Divider />
                <NavLink className="text-decoration-none text-danger" to={`${url}/manageAllOrders`}><Button color="inherit">Manage All Orders</Button></NavLink>
                <Divider />
                <NavLink className="text-decoration-none text-danger" to={`${url}/addProduct`}><Button color="inherit">Add Product</Button></NavLink>
                <Divider />
                <NavLink className="text-decoration-none text-danger" to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></NavLink>
                <Divider />
                <NavLink className="text-decoration-none text-danger" to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></NavLink>
                <Divider />
                <NavLink className="text-decoration-none text-danger" to="/home"><Button onClick={logout} color="inherit">Log Out</Button></NavLink>
                <Divider />
            </Box>}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    color='error'
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Switch>
                        <PrivateRoute path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/giveReview`}>
                            <GiveReview></GiveReview>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/pay`}>
                            <Pay></Pay>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </PrivateRoute>

                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <Route path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <AdminRoute path={`${path}/manageAllOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                    </Switch>
                </Box>
            </Box>

        </div>

    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
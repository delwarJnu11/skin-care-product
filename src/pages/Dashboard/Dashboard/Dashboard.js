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
import { Button, List, ListItem } from '@mui/material';
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import MyOders from '../MyOrders/MyOders';
import Review from '../Review/Review';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import Pay from '../Pay/Pay';
import useAuth from '../../hooks/useAuth';
import './Dashboard.css';
import AdminRoute from '../../LoginPage/AdminRoute/AdminRoute';


const drawerWidth = 240;


const Dashboard = (props) => {
    const { admin, logOut } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ backgroundColor: "#1c385e", height: "100vh" }}>
            <Toolbar>
                <Typography style={{ color: "white" }} variant="h4">
                    Skin care
                </Typography>
            </Toolbar>

            <Divider />
            <List>
                <ListItem>
                    <NavLink className="text-decoration-none" to='/'>
                        <Button style={{ textAlign: "center", color: "white" }} color="inherit">Back Home</Button>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink className="text-decoration-none" to={`${url}`}>
                        <Button style={{ textAlign: "center", color: "white" }} color="inherit">Dashboard Home</Button>
                    </NavLink>
                </ListItem>
                {!admin ? <>
                    <ListItem>
                        <NavLink className="text-decoration-none" to={`${url}/myOrders`}>
                            <Button style={{ textAlign: "center", color: "white" }} color="inherit">My Orders</Button>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink className="text-decoration-none" to={`${url}/payment`}>
                            <Button style={{ textAlign: "center", color: "white" }} color="inherit">Payment</Button>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink className="text-decoration-none" to={`${url}/review`}>
                            <Button style={{ textAlign: "center", color: "white" }} color="inherit">Review</Button>
                        </NavLink>
                    </ListItem>
                </> :
                    <>
                        <ListItem>
                            <NavLink className="text-decoration-none" to={`${url}/addProduct`}>
                                <Button style={{ textAlign: "center", color: "white" }} color="inherit">Add a Product</Button>
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink className="text-decoration-none" to={`${url}/makeAdmin`}>
                                <Button style={{ textAlign: "center", color: "white" }} color="inherit">Make Admin</Button>
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink className="text-decoration-none" to={`${url}/manageOrders`}>
                                <Button style={{ textAlign: "center", color: "white" }} color="inherit">Manage All Orders</Button>
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink className="text-decoration-none" to={`${url}/manageProducts`}>
                                <Button style={{ textAlign: "center", color: "white" }} color="inherit">Manage Products</Button>
                            </NavLink>
                        </ListItem>
                    </>
                }
                <ListItem>
                    <NavLink className="text-decoration-none" to='/'>
                        <Button style={{ textAlign: "center", color: "white" }} onClick={logOut} variant="contained" color="error">Log Out</Button>
                    </NavLink>
                </ListItem>
            </List>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                style={{ backgroundColor: "#1c385e" }}
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
                {/* The implementation can be swapped with js to avoid SEO duplication of NavLinks. */}
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
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOders></MyOders>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>

                </Switch>
            </Box>
        </Box>
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
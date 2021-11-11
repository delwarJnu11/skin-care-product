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


const drawerWidth = 240;


const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <Typography variant="h5">
                    Skin care
                </Typography>
            </Toolbar>

            <Divider />
            <List>
                <ListItem>
                    <NavLink to='/'>
                        <Button color="inherit">Home</Button>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to={`${url}`}>
                        <Button color="inherit">Dashboard Home</Button>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to={`${url}/myOrders`}>
                        <Button color="inherit">My Orders</Button>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to={`${url}/payment`}>
                        <Button color="inherit">Payment</Button>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to={`${url}/review`}>
                        <Button color="inherit">Review</Button>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to={`${url}/addProduct`}>
                        <Button color="inherit">Add a Product</Button>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to={`${url}/makeAdmin`}>
                        <Button color="inherit">Make Admin</Button>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to={`${url}/manageOrders`}>
                        <Button color="inherit">Manage All Orders</Button>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to={`${url}/manageProducts`}>
                        <Button color="inherit">Manage Products</Button>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to={`${url}`}>
                        <Button color="inherit">Log Out</Button>
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
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>

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
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { useRouteMatch } from 'react-router';
// import { Link, NavLink } from 'react-router-dom';
// import { Switch, Route, } from "react-router-dom";
// import Button from '@mui/material/Button';
// import ManageProducts from '../ManageProducts/ManageProducts';
// import MyOders from '../MyOrders/MyOders';
// import Pay from '../Pay/Pay';
// import Review from '../Review/Review';
// import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
// import AddProduct from '../AddProduct/AddProduct';
// import MakeAdmin from '../MakeAdmin/MakeAdmin';

// const drawerWidth = 240;

// function Dashboard(props) {



//     const { window } = props;
//     const [mobileOpen, setMobileOpen] = React.useState(false);

//     const handleDrawerToggle = () => {
//         setMobileOpen(!mobileOpen);
//     };

//     let { path, url } = useRouteMatch();







//     const drawer = (
//         <div>

//             <Toolbar />

//             <List>

//                 <ListItem><NavLink to="/">Home</NavLink></ListItem>
//                 <ListItem><Link activeStyle={{
//                     fontWeight: "bold",
//                     color: "#A47355"
//                 }} to={`${url}`}>Pay</Link></ListItem>

//                 <ListItem><NavLink activeStyle={{
//                     fontWeight: "bold",
//                     color: "#A47355"
//                 }} to={`${url}/myOrders`}>My Orders</NavLink></ListItem>

//                 <ListItem><NavLink activeStyle={{
//                     fontWeight: "bold",
//                     color: "#A47355"
//                 }} to={`${url}/review`}>Review</NavLink></ListItem>

//                 <ListItem><NavLink activeStyle={{
//                     fontWeight: "bold",
//                     color: "#A47355"
//                 }} to={`${url}/manageOrders`}>Manage All Orders</NavLink></ListItem>

//                 <ListItem><NavLink activeStyle={{
//                     fontWeight: "bold",
//                     color: "#A47355"
//                 }} to={`${url}/addProduct`}>Add Product</NavLink></ListItem>

//                 <ListItem><NavLink activeStyle={{
//                     fontWeight: "bold",
//                     color: "#A47355"
//                 }} to={`${url}/makeAdmin`}>Make Admin</NavLink></ListItem>

//                 <ListItem><NavLink activeStyle={{
//                     fontWeight: "bold",
//                     color: "#A47355"
//                 }} to={`${url}/manageProducts`}>Manage Products</NavLink></ListItem>
//                 <ListItem>
//                     <Button variant="contained" sx={{ backgroundColor: "#EF0081" }} >Log Out</Button>
//                 </ListItem>

//             </List>

//         </div>
//     );

//     const container = window !== undefined ? () => window().document.body : undefined;

//     return (
//         <>
//             <Box sx={{ display: 'flex' }}>
//                 <CssBaseline />
//                 <AppBar
//                     position="fixed"
//                     sx={{
//                         width: { sm: `calc(100% - ${drawerWidth}px)` },
//                         ml: `{ sm: ${drawerWidth}px }`,
//                     }}
//                 >
//                     <Toolbar>
//                         <IconButton
//                             color="inherit"
//                             aria-label="open drawer"
//                             edge="start"
//                             onClick={handleDrawerToggle}
//                             sx={{ mr: 2, display: { sm: 'none' } }}
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Typography variant="h6" noWrap component="div">
//                             Dashboard
//                         </Typography>
//                     </Toolbar>
//                 </AppBar>
//                 <Box
//                     component="nav"
//                     sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//                     aria-label="mailbox folders"
//                 >
//                     {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//                     <Drawer
//                         container={container}
//                         variant="temporary"
//                         open={mobileOpen}
//                         onClose={handleDrawerToggle}
//                         ModalProps={{
//                             keepMounted: true, // Better open performance on mobile.
//                         }}
//                         sx={{
//                             display: { xs: 'block', sm: 'none' },
//                             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                         }}
//                     >
//                         {drawer}
//                     </Drawer>
//                     <Drawer
//                         variant="permanent"
//                         sx={{
//                             display: { xs: 'none', sm: 'block' },
//                             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                         }}
//                         open
//                     >
//                         {drawer}
//                     </Drawer>
//                 </Box>
//                 <Box
//                     component="main"
//                     sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//                 >
//                     <Toolbar />

//                     <Switch>
//                         <Route exact path={path}>
//                             <Pay></Pay>
//                         </Route>
//                         <Route path={`${path}/myOrders`}>
//                             <MyOders></MyOders>
//                         </Route>
//                         <Route path={`${path}/review`}>
//                             <Review></Review>
//                         </Route>
//                         <Route path={`${path}/manageOrders`}>
//                             <ManageAllOrders></ManageAllOrders>
//                         </Route>
//                         <Route path={`${path}/addProduct`}>
//                             <AddProduct></AddProduct>
//                         </Route>
//                         <Route path={`${path}/makeAdmin`}>
//                             <MakeAdmin></MakeAdmin>
//                         </Route>
//                         <Route path={`${path}/manageProducts`}>
//                             <ManageProducts></ManageProducts>
//                         </Route>
//                     </Switch>

//                 </Box>
//             </Box>
//         </>

//     );
// }

// Dashboard.propTypes = {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };

// export default Dashboard;
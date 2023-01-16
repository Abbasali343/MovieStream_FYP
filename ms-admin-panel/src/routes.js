/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Login from "views/Login.js";
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Create from "views/Create.js";
import Movies from "views/Movies.js";
import AddMovie from "views/AddMovie";
import AddSeries from "views/AddSeries";
import AddNew from "views/AddNew"
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";

const dashboardRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-chart-pie-35",
    component: Login,
    showInSideBar: false,
    layout: "/unauth"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    showInSideBar: true,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    showInSideBar: true,
    layout: "/admin"
  },
  {
    path: "/movies",
    name: "Movies and Series",
    icon: "nc-icon nc-album-2",
    component: Movies,
    showInSideBar: true,
    layout: "/admin"
  },
  {
    path: "/addmovie",
    name: "Add Movie",
    icon: "nc-icon nc-notes",
    component: AddMovie,
    showInSideBar: false,
    layout: "/admin"
  },
  {
    path: "/addseries",
    name: "Add Series",
    icon: "nc-icon nc-notes",
    component: AddSeries,
    showInSideBar: false,
    layout: "/admin"
  },
  {
    path: "/create",
    name: "Create",
    icon: "nc-icon nc-notes",
    component: Create,
    showInSideBar: false,
    layout: "/admin"
  },
  {
    path: "/addnew",
    name: "Add New",
    icon: "nc-icon nc-album-2",
    component: AddNew,
    showInSideBar: true,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    showInSideBar: true,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    showInSideBar: true,
    component: Notifications,
    layout: "/admin"
  }
];

export default dashboardRoutes;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignInPage, PrivateRoute } from "./auth";
import { CreateGroupPage, GroupePage, GroupsListPage } from "./groups";
import { NotFoundPage } from "./NotFoundPage";
import { NavBar } from "./Navigation";

const routes = [
  {
    path: "/",
    Component: GroupsListPage,
    private: true,
    exact: true,
  },
  {
    path: "/groups/:id",
    Component: GroupePage,
    private: true,
  },
  {
    path: "/sign-in",
    Component: SignInPage,
  },
  {
    path: "/create-group",
    Component: CreateGroupPage,
    private: true,
  },
  {
    path: "/create-group",
    Component: CreateGroupPage,
    private: true,
  },
  {
    Component: NotFoundPage,
  },
];

export const Routes = ({ isLoading, user }) => (
  <Router>
    <NavBar user={user} />
    <Switch>
      {routes.map((route, index) => {
        const RouteType = route.private ? PrivateRoute : Route;
        return (
          <RouteType
            key={index}
            path={route.path}
            exact={route.exact}
            isLoading={isLoading}
            isAuthed={!!user}
          >
            <route.Component />
          </RouteType>
        );
      })}
    </Switch>
  </Router>
);

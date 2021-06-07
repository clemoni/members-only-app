import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignInPage } from "./auth";
import { CreateGroupPage, GroupePage, GroupsListPage } from "./groups";
import { NotFoundPage } from "./NotFoundPage";
import { NavBar } from "./Navigation";

const routes = [
  {
    path: "/",
    Component: GroupsListPage,
    exact: true,
  },
  {
    path: "/groups/:id",
    Component: GroupePage,
  },
  {
    path: "/sign-in",
    Component: SignInPage,
  },
  {
    path: "/create-group",
    Component: CreateGroupPage,
  },
  {
    path: "/create-group",
    Component: CreateGroupPage,
  },
  {
    Component: NotFoundPage,
  },
];

export const Routes = () => (
  <Router>
    <NavBar />
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact}>
          <route.Component />
        </Route>
      ))}
    </Switch>
  </Router>
);

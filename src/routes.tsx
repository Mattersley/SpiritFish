/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Admin from './containers/Admin (Change Password, Forgot Password, Verify Email)/Admin';
import Cocktails from './containers/Page Containers/Cocktails/Cocktails';
import Distilleries from './containers/Page Containers/Distilleries/Distilleries';
import News from './containers/Page Containers/News/News';
import Products from './containers/Page Containers/Products/Products';
import RegisterDistillery from './containers/Users/Distillery/RegisterDistillery/RegisterDistillery';
import Stores from './containers/Page Containers/Stores/Stores';
import Masonry from './containers/Layout/components/Masonry/Masonry';
import Account from './containers/Account (Change Details, Delete Account)/Account';
import Logout from './containers/Auth (Login, Register, Logout)/Logout/Logout';

const Auth = React.lazy(() => import('./containers/Auth (Login, Register, Logout)/Auth'));
const DistilleryHome = React.lazy(() => import('./containers/Users/Distillery/DistilleryHome/DistilleryHome'));
const UserHome = React.lazy(() => import('./containers/Users/Patron/PatronHome/PatronHome'));

export const defaultRoutes = (
  <Switch>
    <Route path="/admin" component={Admin} />
    <Route path="/auth" render={(props) => <Auth {...props} />} />
    <Route path="/cocktails" component={Cocktails} />
    <Route path="/distilleries" component={Distilleries} />
    <Route path="/news" component={News} />
    <Route path="/products" component={Products} />
    <Route path="/distilleryReg" component={RegisterDistillery} />
    <Route path="/stores" component={Stores} />
    <Route path="/" exact component={Masonry} />
    <Redirect to="/" />
  </Switch>
);

export const userRoutes = (
  <Switch>
    <Route path="/account" component={Account} />
    <Route path="/admin" component={Admin} />
    <Route path="/auth" render={(props) => <Auth {...props} />} />
    <Route path="/cocktails" component={Cocktails} />
    <Route path="/distilleries" component={Distilleries} />
    <Route path="/logout" component={Logout} />
    <Route path="/news" component={News} />
    <Route path="/products" component={Products} />
    <Route path="/stores" component={Stores} />
    <Route path="/distilleryReg" component={RegisterDistillery} />
    <Route path="/userhome" component={UserHome} />
    <Redirect to="/userhome" />
    <Route path="/" exact component={Masonry} />
  </Switch>
);

export const distilleryRoutes = (
  <Switch>
    <Route path="/account" component={Account} />
    <Route path="/admin" component={Admin} />
    <Route path="/auth" render={(props) => <Auth {...props} />} />
    <Route path="/cocktails" component={Cocktails} />
    <Route path="/distilleries" component={Distilleries} />
    <Route path="/logout" component={Logout} />
    <Route path="/news" component={News} />
    <Route path="/products" component={Products} />
    <Route path="/stores" component={Stores} />
    <Route path="/distilleryReg" component={RegisterDistillery} />
    <Route path="/distilleryHome" component={DistilleryHome} />
    <Redirect to="/distilleryHome" />
    <Route path="/" exact component={Masonry} />
  </Switch>
);

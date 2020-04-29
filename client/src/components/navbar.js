import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './main';
import Magazin from './magazin';
import Coupons from './coupons';
import Registration from './auth/registration';
import Login from './auth/login';



const Navi = ()=> (
	<Switch>
	   <Route exact path="/" component={Main} />
	    <Route  path="/magazin" component={Magazin} />
		 <Route  path="/coupons" component={Coupons} /> 
		 <Route path="/registration" component={Registration} />
		 <Route path="/login" component={Login} />
	</Switch>
)
	export default Navi;
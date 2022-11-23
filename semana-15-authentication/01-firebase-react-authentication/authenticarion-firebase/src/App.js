import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
	return (
		<AuthProvider>
			<Router>
				<div>
					<PrivateRoute exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/singup" component={SignUp} />
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Github from "./pages/github";

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} />
				<Route path="/homepage" component={Home} />
				<Route path="/github" component={Github} />
			</Switch>
		</Router>
	);
}

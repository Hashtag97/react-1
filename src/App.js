import Footer from "./componets/Footer";
import Header from "./componets/Header";
import NavBar from "./componets/NavBar";
import Profile from "./componets/Profile";

import "./App.css"

const App = () => {
	return (
		<div className="appWrapper">
			<Header />
			<NavBar />
			<Profile />
			<Footer />
		</div>
	);
};

export default App;

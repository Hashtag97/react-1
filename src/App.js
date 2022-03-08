import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

import "./App.css";

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

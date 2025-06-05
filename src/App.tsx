import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;

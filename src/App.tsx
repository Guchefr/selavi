import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import NossaEquipe from "./pages/NossaEquipe";
import NossasCriacoes from "./pages/NossasCriacoes";
import Contato from "./pages/Contato";
import WhatsAppButton from "./components/WhatsAppButton";

import "./App.css";



function App() {
	return (
		<Router>
			<WhatsAppButton />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/quem-somos" element={<QuemSomos />} />
				<Route path="/nossa-equipe" element={<NossaEquipe />} />
				<Route path="/nossas-criacoes" element={<NossasCriacoes />} />
				<Route path="/contato" element={<Contato />} />


			</Routes>

		</Router>
	);
}

export default App;

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import "./App.css";

function App() {
	return (
		<>
			<NavBar />
			<Header isHome={true} />
			{/* Aqui virá o resto do seu conteúdo da home */}
		</>
	);
}

export default App;

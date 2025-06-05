import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<header className="navbar">
			<div className="navbar-top">
				<div className="logo">
					<Link to="/" className="logo-link">
											<button
						type="button"
						className="logo-button"
						title="Selavì Confeitaria"
					/>
					</Link>
				</div>
			</div>

			<div className="navbar-bottom">
				<ul className="nav-links">
					<li>
						<Link to="/quem-somos">Quem somos</Link>
					</li>

					<li className="croissant" />

					<li>
						<Link to="/nossa-equipe">Nossa equipe</Link>
					</li>
					<li className="croissant" />
					<li>
						<Link to="/nossas-criacoes">Nossas criações</Link>
					</li>
					<li className="croissant" />
					<li>
						<Link to="/contato">Contato</Link>
					</li>
					<li className="croissant" />
				</ul>
			</div>
		</header>
	);
};

export default NavBar;

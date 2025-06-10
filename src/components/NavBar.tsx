import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

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

				{/* Botão hamburguer para mobile */}
				<button
					className={`hamburger ${menuOpen ? "open" : ""}`}
					onClick={toggleMenu}
					aria-label="Menu"
					aria-expanded={menuOpen}
				>
					<span />
					<span />
					<span />
				</button>
			</div>

			{/* Menu de navegação */}
			<div className={`navbar-bottom ${menuOpen ? "open" : ""}`}>
				<ul className="nav-links">
					<li>
						<Link to="/quem-somos" onClick={() => setMenuOpen(false)}>Quem somos</Link>
					</li>
					<li className="croissant" />

					<li>
						<Link to="/nossa-equipe" onClick={() => setMenuOpen(false)}>Nossa equipe</Link>
					</li>
					<li className="croissant" />

					<li>
						<Link to="/nossas-criacoes" onClick={() => setMenuOpen(false)}>Nossas criações</Link>
					</li>
					<li className="croissant" />

					<li>
						<Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
					</li>
					<li className="croissant" />
				</ul>
			</div>
		</header>
	);
};

export default NavBar;

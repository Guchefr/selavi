import "./NavBar.css";

const NavBar = () => {
	return (
		<header className="navbar">
			<div className="navbar-top">
				<div className="logo">
					<button
						type="button"
						className="logo-button"
						title="Selavì Confeitaria"
					/>
				</div>
			</div>

			<div className="navbar-bottom">
				<ul className="nav-links">
					<li>
						<a href="#quem-somos">Quem somos</a>
					</li>
					<li className="croissant" />
					<li>
						<a href="#equipe">Nossa equipe</a>
					</li>
					<li className="croissant" />
					<li>
						<a href="#criacao">Nossas criações</a>
					</li>
					<li className="croissant" />
					<li>
						<a href="#contato">Contato</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default NavBar;

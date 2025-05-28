import "./Header.css";
import slide1 from "../assets/images/studiolike/slide1.jpg";
import slide2 from "../assets/images/studiolike/slide2.jpg";
import slide3 from "../assets/images/studiolike/slide3.jpg";
import slide4 from "../assets/images/studiolike/slide4.jpg";
import slide5 from "../assets/images/studiolike/slide5.jpg";

interface HeaderProps {
	isHome: boolean;
	image?: string; // para as páginas com imagem única
}

const Header = ({ isHome, image }: HeaderProps) => {
	if (!isHome && !image) return null; // não renderiza nada (ex: página de contato)

	return (
		<header className="header">
			{isHome ? (
				<div className="carousel">
					<img src={slide1} id="photo1" alt="Slide 1" />
					<img src={slide2} id="photo2" alt="Slide 2" />
					<img src={slide3} id="photo3" alt="Slide 3" />
					<img src={slide4} id="photo4" alt="Slide 4" />
					<img src={slide5} id="" alt="Slide 5" />
				</div>
			) : (
				<img className="static-image" src={image} alt="Header" />
			)}
		</header>
	);
};

export default Header;

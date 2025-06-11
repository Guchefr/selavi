import { useState, useEffect, useRef } from "react";
import "./Header.css";
import slide1 from "../assets/images/paginas/home/slide1.jpg";
import slide2 from "../assets/images/paginas/home/slide2.jpg";
import slide3 from "../assets/images/paginas/home/slide3.jpg";
import slide4 from "../assets/images/paginas/home/slide4.jpg";
import slide5 from "../assets/images/paginas/home/slide5.jpg";
import slide6 from "../assets/images/paginas/home/slide6.jpg";
import slide7 from "../assets/images/paginas/home/slide7.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

interface HeaderProps {
	isHome: boolean;
	image?: string;
	height?: string;
	grayscale?: boolean;
	className?: string;
}

const Header = ({ isHome, image, height = "75vh", grayscale, className }: HeaderProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [paused, setPaused] = useState(false);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


	useEffect(() => {
		if (!paused) {
			intervalRef.current = setInterval(() => {
				setCurrentIndex((prev) => (prev + 1) % slides.length);
			}, 5000);
		}

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [paused]);

	if (!isHome && !image) return null;

	const goToSlide = (index: number) => {
		if (index < 0) {
			setCurrentIndex(slides.length - 1);
		} else if (index >= slides.length) {
			setCurrentIndex(0);
		} else {
			setCurrentIndex(index);
		}
	};

	return (
		<header
			className="header"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			{isHome ? (
				<div className="carousel-wrapper">
					<div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
						{slides.map((src, index) => (
							<img key={index} src={src} alt={`Slide ${index + 1}`} />
						))}
					</div>
					<button className="nav-arrow left" onClick={() => goToSlide(currentIndex - 1)} aria-label="Previous slide">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
							<polyline points="15 18 9 12 15 6" />
						</svg>
					</button>

					<button className="nav-arrow right" onClick={() => goToSlide(currentIndex + 1)} aria-label="Next slide">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
							<polyline points="9 18 15 12 9 6" />
						</svg>
					</button>
					<div className="carousel-dots">
						{slides.map((_, index) => (
							<button
								key={index}
								className={`dot ${index === currentIndex ? "active" : ""}`}
								onClick={() => setCurrentIndex(index)}
								aria-label={`Aller au slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			) : (
				<img
					className={`static-image ${grayscale ? "grayscale" : ""} ${className || ""}`}
					src={image}
					alt="Header"
					style={{ height }}
				/>
			)}
		</header>
	);
};

export default Header;

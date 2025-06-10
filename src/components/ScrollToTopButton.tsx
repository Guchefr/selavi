import { useEffect, useState } from "react";
import scroll from "../assets/images/icons/scroll.png"; // seu ícone

import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`scroll-to-top ${visible ? "show" : ""}`}
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
        >
            <img src={scroll} alt="Voltar ao topo" title="Voltar ao início" />
        </button>
    );
};

export default ScrollToTopButton;

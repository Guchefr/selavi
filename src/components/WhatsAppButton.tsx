import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleLoaderEnded = () => {

            const isContato = location.pathname === "/contato";
            const isHomeWithLoader = location.pathname === "/" && !document.body.id;

            setVisible(!(isContato || isHomeWithLoader));
        };

        window.addEventListener("loaderEnded", handleLoaderEnded);


        handleLoaderEnded();

        return () => window.removeEventListener("loaderEnded", handleLoaderEnded);
    }, [location.pathname]);

    if (!visible) return null;

    return (
        <a
            href="https://wa.me/5513996298156"
            target="_blank"
            rel="noopener noreferrer"
            title="Converse conosco no WhatsApp"
            aria-label="Converse conosco no WhatsApp"
            className="whatsapp-float fade-in"
        >
            <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
            />
        </a>
    );
};

export default WhatsAppButton;

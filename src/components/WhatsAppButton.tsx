import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./WhatsAppButton.css";

const WhatsAppButton = () => {
    const location = useLocation();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (location.pathname === "/contato") {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }, [location.pathname]);

    return (
        <a
            href="https://wa.me/5513996298156"
            target="_blank"
            rel="noopener noreferrer"
            title="Converse conosco no WhatsApp"
            aria-label="Converse conosco no WhatsApp"
            className={`whatsapp-float ${visible ? "fade-in" : "fade-out"}`}
        >
            <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
            />
        </a>
    );
};

export default WhatsAppButton;

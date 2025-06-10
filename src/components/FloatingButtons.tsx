import WhatsAppButton from "./WhatsAppButton";
import ScrollToTopButton from "./ScrollToTopButton";

import "./FloatingButtons.css";

const FloatingButtons = () => {
    return (
        <div className="floating-buttons-container">
            <ScrollToTopButton />
            <WhatsAppButton />
        </div>
    );
};

export default FloatingButtons;

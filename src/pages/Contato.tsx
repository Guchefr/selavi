import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./Contato.css";

const Contato = () => {
  return (
    <>
      <NavBar />

      <main className="contato-container">
        <h1>Onde estamos</h1>
        <p>Selavì Confeitaria e Café – Rua Bahia, 80 - Gonzaga, Santos - SP</p>

        <div style={{ width: "100%", height: "400px", marginTop: "20px" }}>
          <iframe className="mapa-selavi"
            title="Mapa da Selavì"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1485303186797!2d-46.33573902468689!3d-23.967937078534404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03e23491aa69%3A0x2c8f2a888abf9d3!2sR.%20Bahia%2C%2080%20-%20Gonzaga%2C%20Santos%20-%20SP%2C%2011055-250!5e0!3m2!1spt-BR!2sbr!4v1717690000000!5m2!1spt-BR!2sbr"
          ></iframe>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contato;

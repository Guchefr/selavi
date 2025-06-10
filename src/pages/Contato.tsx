import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./Contato.css";

import whatsappIcon from "../assets/images/icons/whats.png";
import instagramIcon from "../assets/images/icons/insta.png";
import emailIcon from "../assets/images/icons/email.png";

import foto1 from "../assets/images/casa/casa1.jpg";
import foto2 from "../assets/images/casa/casa2.jpg";
import foto3 from "../assets/images/casa/casa3.jpg";

const Contato = () => {
  return (
    <>
      <NavBar />

      <main className="contato-container">
        <h2 className="contato-title">Onde nos encontrar</h2>
        <section className="contato-top">
          <div className="contato-mapa-texto">

            <div className="mapa-container">
              <iframe
                className="mapa-selavi"
                title="Mapa da Selavì"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1485303186797!2d-46.33573902468689!3d-23.967937078534404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03e23491aa69%3A0x2c8f2a888abf9d3!2sR.%20Bahia%2C%2080%20-%20Gonzaga%2C%20Santos%20-%20SP%2C%2011055-250!5e0!3m2!1spt-BR!2sbr!4v1717690000000!5m2!1spt-BR!2sbr"
              ></iframe>
            </div>
          </div>

          <div className="contato-infos">
            <h3>Endereço e Contatos</h3>
            <p>Selavì Confeitaria e Café – Rua Bahia, 80 - Gonzaga, Santos - SP</p>
            <ul>
              <li>
                <img src={whatsappIcon} alt="WhatsApp" />
                <a href="https://wa.me/5513996298156" target="_blank" rel="noreferrer">
                  +55 (13) 99629-8156
                </a>
              </li>
              <li>
                <img src={instagramIcon} alt="Instagram" />
                <a href="https://instagram.com/selaviconfeitariaecafe" target="_blank" rel="noreferrer">
                  @selaviconfeitariaecafe
                </a>
              </li>
              <li>
                <img src={emailIcon} alt="Email" />
                <a href="mailto:contato@selavi.com.br">contato@selavi.com.br</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="galeria">
          <h3>Nosso espaço</h3>
          <p className="galeria-texto">
            Espaço interno: 7 mesas, 22 lugares.<br />
            Espaço externo: 2 mesas, 8 lugares.
          </p>
          <div className="galeria-fotos">
            <img src={foto1} alt="Interior da confeitaria" />
            <img src={foto2} alt="Vitrine de doces" />
            <img src={foto3} alt="Área externa" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contato;
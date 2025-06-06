import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content-2cols">
				{/* COLUNA 1 */}
				<div className="footer-column">
					<div className="footer-section">
						<h3>Endereço:</h3>
						<p>Rua Bahia, 80 - Gonzaga</p>
						<p>Santos - SP</p>
					</div>

					<div className="footer-section">
						<h3>Horários:</h3>
						<p>Terça a Domingo: 10h30 às 20h</p>
					</div>
				</div>

				{/* COLUNA 2 */}
				<div className="footer-column">
					<div className="footer-section">
						<h3>Contato:</h3>
						<p>
							<FontAwesomeIcon icon={faWhatsapp} /> +55 (13) 99629-8156
						</p>
						<p>
							<FontAwesomeIcon icon={faInstagram} /> @selaviconfeitariaecafe
						</p>
					</div>

					<div className="footer-section">
						<h3>Pagamentos:</h3>
						<p>💳 Aceitamos Visa, Mastercard, Pix e Elo</p>
					</div>


				</div>
			</div>

			<p className="footer-bottom">
				© 2025 Selavi Confeitaria - Todos os direitos reservados <br />
				<span className="cnpj-text">CNPJ: 42.543.142/0001-45</span>
			</p>
		</footer >

	);
};

export default Footer;

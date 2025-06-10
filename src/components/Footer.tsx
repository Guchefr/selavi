import "./Footer.css";
import insta from "../assets/images/icons/insta.png";
import whats from '../assets/images/icons/whats.png';
import email from '../assets/images/icons/email.png';
import endereco from '../assets/images/icons/local.png';
import calendario from '../assets/images/icons/calendario.png';
import pagamento from '../assets/images/icons/pagamento.png';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content-2cols">

				<div className="footer-column">
					<div className="footer-section">
						<h3>

							Endereço:
						</h3>
						<p><img src={endereco} alt="Endereço" className="footer-icon" /> Rua Bahia, 80 - Gonzaga</p>
						<p>Santos - SP</p>
					</div>

					<div className="footer-section">
						<h3>

							Horários:
						</h3>
						<p><img src={calendario} alt="Horários" className="footer-icon" /> Terça a Domingo: 10h30 às 20h</p>
					</div>
				</div>


				<div className="footer-column">
					<div className="footer-section">
						<h3>Contato:</h3>
						<p>
							<img src={whats} alt="WhatsApp" className="footer-icon" />
							<a href="https://wa.me/5513996298156" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
								+55 (13) 99629-8156
							</a>
						</p>
						<p>
							<img src={insta} alt="Instagram" className="footer-icon" />
							<a href="https://instagram.com/selaviconfeitariaecafe" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
								@selaviconfeitariaecafe
							</a>
						</p>
						<p>
							<img src={email} alt="Email" className="footer-icon" />
							<a href="mailto:adm@selaviconfeitaria.com.br" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
								adm@selaviconfeitaria.com.br
							</a>
						</p>
					</div>

					<div className="footer-section">
						<h3>

							Pagamentos:
						</h3>
						<p><img src={pagamento} alt="Pagamentos" className="footer-icon" /> Aceitamos Visa, Mastercard, Pix e Elo</p>
					</div>
				</div>
			</div>

			<p className="footer-bottom">
				© 2025 Selavi Confeitaria - Todos os direitos reservados <br />
				<span className="cnpj-text">CNPJ: 42.543.142/0001-45</span>
			</p>
		</footer>

	);
};

export default Footer;

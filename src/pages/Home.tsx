import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

import "./Home.css"
import mesadoces from "../assets/images/studiolike/mesalinda.jpg"
import tortalimao from "../assets/images/studiolike/tartecitron.jpg";
import viennoiseries from "../assets/images/studiolike/slide4.jpg";
import parisbrest from "../assets/images/studiolike/parisbrest.jpg";
import tortaselavi from "../assets/images/studiolike/nossossabores1.jpg";
import tartefraise from "../assets/images/studiolike/nossossabores2.jpg";
import esfera from "../assets/images/studiolike/nossossabores3.jpg";
import evento1 from "../assets/images/studiolike/eventos1.jpg";
import evento2 from "../assets/images/studiolike/eventos2.jpg";
import evento3 from "../assets/images/studiolike/eventos3.jpg";

const Home = () => {

    const navigate = useNavigate();
	return (
		<>
        
			
			<Header isHome={true} />

			<section className="introducao">
				<div className="container">
					<div className="texto">
						<h2>
							Selavi — <i>c’est la vie…</i><br />
							<span>mais bem mais gostosa.</span>
						</h2>
						<p>
							Um toque francês, um sabor brasileiro. Na Selavi, a doçura está em cada detalhe nas receitas feitas com carinho, na leveza dos ingredientes e no prazer de viver o agora.
							Porque a vida passa rápido, mas um bom doce faz ela parar por um instante.
						</p>
						<button className="btn-destaque" onClick={() => navigate("/quem-somos")}>Conheça a Selavi</button>
					</div>
					<div className="imagem">
						<img src={mesadoces} />
					</div>
				</div>
			</section>

			<section className="processos">
				<div className="container">
					<h2>Os processos</h2>
					<p>
						Nossos pães e doces são feitos com amor e dedicação. Cada etapa do processo é cuidadosamente elaborada para garantir a máxima qualidade.
					</p>

					<div className="cards">
						<div className="card-wrapper">
							<div className="card">
								<img src={tortalimao} alt="Ingredientes" />
							</div>
							<h3>Seleção de Ingredientes de Alta Qualidade</h3>
						</div>

						<div className="card-wrapper">
							<div className="card">
								<img src={viennoiseries} alt="Técnicas" />
							</div>
							<h3>Técnicas Tradicionais e Inovadoras</h3>
						</div>

						<div className="card-wrapper">
							<div className="card">
								<img src={parisbrest} alt="Cuidado no processo" />
							</div>
							<h3>Cuidado em Cada Detalhe do Processo</h3>
						</div>
					</div>

					<button className="btn-destaque" onClick={() => navigate("/nossa-equipe")}>Nossos chefs</button>
				</div>
			</section>

			<section className="sabores">
				<div className="container">
					<h2>Nossos Sabores</h2>
					<p>
						Trabalhamos com um cardápio rotativo que reflete a criatividade da nossa cozinha e os ingredientes mais frescos da estação.
					</p>

					<div className="cards">
						
							<div className="card">
								<img src={tortaselavi} alt="Torta Selavì" />
							</div>
							
						

						
							<div className="card">
								<img src={tartefraise} alt="Tarte aux Fraises" />
							</div>
							
						

						
							<div className="card">
								<img src={esfera} alt="Esfera Framboesa" />
							</div>
													
					</div>

					<button className="btn-destaque" onClick={() => navigate("/nossas-criacoes")}>Nossas criações</button>
				</div>
			</section>
            <section className="eventos">
				<div className="container">
					<h2>Ecomendas e eventos</h2>
					<p>
						Natal, Páscoa, Dia das Mães, aniversários ou eventos especiais, na Selavì, criamos doces sob encomenda para tornar sua celebração ainda mais memorável. Fale com a gente e descubra como podemos adoçar o seu momento.
					</p>

					<div className="cards">
						
							<div className="card">
								<img src={evento1} alt="Dia dos namorados" />
							
							
						</div>

						
							<div className="card">
								<img src={evento2} alt="Dia das mães" />
							</div>
							
						

						
							<div className="card">
								<img src={evento3} alt="Páscoa" />
							</div>
													
					</div>

					<button className="btn-destaque" onClick={() => navigate("/contato")}>Contato</button>
				</div>
			</section>
            

			
		</>
	);
};

export default Home;

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./QuemSomos.css";
import quemSomosHeaderImage from "../assets/images/chefs/Quemsomosheader.jpg";
import joaoquemprofile from "../assets/images/chefs/joaoquemsomos2.jpg";
import natiquemprofile from "../assets/images/chefs/natiquemsomos.jpg";
import qualidade from "../assets/images/icons/qualidade.png";
import sustentabilidade from "../assets/images/icons/sustentabilidade.png";
import experiencia from "../assets/images/icons/experiencia.png";
import inovacao from "../assets/images/icons/inovacao.png";
import carinho from "../assets/images/icons/carinho.png";
import artesanal from "../assets/images/icons/artesanal.png";
import proposito from "../assets/images/studiolike/proposito1.jpg";


const QuemSomos = () => {
    return (
        <>
            <NavBar />
            <Header isHome={false} image={quemSomosHeaderImage} height="80vh" />
            <p className="quemsomos-intro">
                “Transformamos técnica em afeto, e doces em experiências.”
            </p>
            <main className="quemsomos-container">

                <section className="quemsomos-chefes">
                    <div className="quemsomos-bloco1">
                        <div className="quemsomos-texto1">
                            <h2>Uma confeitaria com alma</h2>
                            <p>
                                A Selavì nasceu da paixão do Chef João pela confeitaria, descoberta durante seu curso de gastronomia e aprimorada no renomado Le Cordon Bleu, em Paris. Ao lado da Chef Natália, especialista em panificação com raízes italianas, eles fundaram a Selavì em Santos-SP, em 09/09/2021. Juntos, unem técnica, estética e emoção para criar experiências únicas através da confeitaria.
                            </p>
                        </div>

                        <div className="chef-quemsomos-profile">
                            <img src={joaoquemprofile} alt="Chef João" />

                        </div>
                    </div>

                    <div className="quemsomos-bloco2">
                        <div className="chef-quemsomos-profile">
                            <img src={natiquemprofile} className="nati" alt="Chef Natália" />

                        </div>
                        <div className="quemsomos-texto2">
                            <h2>Nossa essência</h2>
                            <p>
                                Na Selavì, cada doce e salgado é feito à mão diariamente, combinando técnicas francesas com ingredientes brasileiros. Buscamos o equilíbrio perfeito entre sabor e estética, utilizando menos açúcar e mais autenticidade, para proporcionar momentos memoráveis a cada mordida.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="quemsomos-valores">
                    <h2>Nossos valores</h2>

                    <div className="valores-container">
                        <div className="valores-coluna">
                            <div className="valor-item">
                                <img src={qualidade} alt="Qualidade" />
                                <span>Qualidade</span>
                            </div>
                            <div className="valor-item">
                                <img src={inovacao} alt="Inovação" />
                                <span>Inovação</span>
                            </div>
                            <div className="valor-item">
                                <img src={artesanal} alt="100% Artesanal" />
                                <span>100% Artesanal</span>
                            </div>
                        </div>

                        <div className="valores-coluna">
                            <div className="valor-item">
                                <img src={carinho} alt="Carinho e dedicação" />
                                <span>Carinho e dedicação</span>
                            </div>
                            <div className="valor-item">
                                <img src={experiencia} alt="Experiência" />
                                <span>Experiência</span>
                            </div>
                            <div className="valor-item">
                                <img src={sustentabilidade} alt="Sustentabilidade" />
                                <span>Sustentabilidade</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="quemsomos-proposito">
                    <div className="proposito-conteudo">
                        <div className="proposito-texto">
                            <h2>Nosso propósito</h2>
                            <p>
                                A Selavì não é apenas uma confeitaria. Oferecemos uma experiência. Cada doce é uma obra de arte, feita com técnicas sofisticadas, como a glaçagem e pulverização, e ingredientes selecionados que garantem um sabor único e equilibrado. Nosso objetivo é ressignificar a confeitaria no Brasil, criando doces que encantam pela beleza, qualidade e pela história que carregam. O sabor, a apresentação e o carinho em cada criação fazem da Selavì um lugar único para se viver momentos especiais.
                            </p>
                        </div>
                        <div className="proposito-img">
                            <img src={proposito} alt="Propósito Selavì" />
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default QuemSomos;
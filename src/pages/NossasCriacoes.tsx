import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import nossasCriacoesHeaderImage from "../assets/images/paginas/criacoes/nossascriacoesheader.jpg";
import "./NossasCriacoes.css";
import img1 from "../assets/images/paginas/criacoes/cria1.jpg"
import img2 from "../assets/images/paginas/criacoes/cria2.jpg";
import img3 from "../assets/images/paginas/criacoes/cria3.jpg";
import img4 from "../assets/images/paginas/criacoes/cria4.jpg";
import img5 from "../assets/images/paginas/criacoes/cria5.jpg";
import img6 from "../assets/images/paginas/criacoes/cria6.jpg";
import img7 from "../assets/images/paginas/criacoes/cria7.jpg";
import img8 from "../assets/images/paginas/criacoes/cria8.jpeg";
import img9 from "../assets/images/paginas/criacoes/cria9.jpg";
import img10 from "../assets/images/paginas/criacoes/cria10.jpg";
import img11 from "../assets/images/paginas/criacoes/cria11.jpg";
import img12 from "../assets/images/paginas/criacoes/cria12.jpg";
import img13 from "../assets/images/paginas/criacoes/cria13.jpg";
import img14 from "../assets/images/paginas/criacoes/cria14.jpg";
import img15 from "../assets/images/paginas/criacoes/cria15.jpg";
import img16 from "../assets/images/paginas/criacoes/cria16.jpg";
import img17 from "../assets/images/paginas/criacoes/cria17.jpg";
import img18 from "../assets/images/paginas/criacoes/cria18.jpg";
import img19 from "../assets/images/paginas/criacoes/cria19.jpg";
import img20 from "../assets/images/paginas/criacoes/cria20.jpg";
import img21 from "../assets/images/paginas/criacoes/cria21.jpg";
import img22 from "../assets/images/paginas/criacoes/cria22.jpg";
import img23 from "../assets/images/paginas/criacoes/cria23.jpg";
import img24 from "../assets/images/paginas/criacoes/cria24.jpg";
import img25 from "../assets/images/paginas/criacoes/cria25.jpg";
import img26 from "../assets/images/paginas/criacoes/cria26.jpg";
import img27 from "../assets/images/paginas/criacoes/cria27.jpg";
import img28 from "../assets/images/paginas/criacoes/cria28.jpg";
import instaIcon from "../assets/images/icons/insta.png"

const imagens = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28
];


const NossasCriacoes = () => {
    return (
        <>
            <NavBar />
            <Header
                isHome={false}
                image={nossasCriacoesHeaderImage}
                height="60vh"
                className="header-nossas-criacoes"
            />


            <main className="nossascriacoes-container">
                <h2>Algumas de nossas criações</h2>

                <div className="criacao-grid">
                    {imagens.map((img, i) => (
                        <div key={i} className="criacao-card">
                            <img src={img} alt={`Criação ${i + 1}`} />
                            <div className="criacao-overlay">
                                <a
                                    href="https://www.instagram.com/selaviconfeitariaecafe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={instaIcon} alt="Instagram" /></a>
                                <span>Siga a gente @selaviconfeitariaecafe</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cardapio-pdf">
                    <a href="/cardapioatual.pdf" target="_blank" rel="noopener noreferrer" className="btn-cardapio">
                        Veja nosso cardápio de bebidas e salgados
                    </a>
                    <a href="/encomendas.pdf" target="_blank" rel="noopener noreferrer" className="btn-cardapio">
                        Veja nossas opções de encomendas
                    </a>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default NossasCriacoes;
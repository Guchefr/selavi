import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import nossasCriacoesHeaderImage from "../assets/images/studiolike/nossascriacoesheader.jpg";

const NossasCriacoes = () => {
    return (
        <>
            <NavBar />
            <Header isHome={false} image={nossasCriacoesHeaderImage} />

            <main className="nossascriacoes-container">
                <h1>Quem Somos</h1>
                <p>
                    Aqui você escreve a história da Selavi, a missão, valores, como começou, etc.
                </p>
            </main>
            <Footer />
        </>
    );
};

export default NossasCriacoes;
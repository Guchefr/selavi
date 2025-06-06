import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import quemSomosHeaderImage from "../assets/images/chefs/Quemsomosheader.jpg";

const QuemSomos = () => {
    return (
        <>
            <NavBar />
            <Header isHome={false} image={quemSomosHeaderImage} height="80vh" />

            <main className="quemsomos-container">
                <h1>Quem Somos</h1>
                <p>
                    Aqui você escreve a história da Selavi, a missão, valores, como começou, etc.
                </p>
            </main>
            <Footer />
        </>
    );
};

export default QuemSomos;
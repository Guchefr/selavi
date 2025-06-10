import "./NossaEquipe.css"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import nossosChefsHeaderImage from "../assets/images/chefs/nossoschefesheader.jpg";
import joaoprofile from "../assets/images/chefs/joaoprofile.jpg";
import natiprofile from "../assets/images/chefs/natiprofile.jpg";

const NossaEquipe = () => {
    return (
        <>
            <NavBar />
            <Header isHome={false} image={nossosChefsHeaderImage} grayscale height="60vh" />

            <main className="nossoschefs-container">
                <div className="chefbloco1">
                    <div className="nossoschefs-texto1">
                        <h2>Nossos chefs</h2>
                        <p>
                            A história na confeitaria é marcada pela dedicação do <span className="chef-name">Chef João Guarnieri</span>, que descobriu sua verdadeira vocação durante o curso de gastronomia. Foi em um mês inteiramente voltado à arte dos doces que ele se encantou pelas possibilidades da confeitaria, um encantamento que rapidamente se transformou em paixão. Determinado a se aprofundar, buscou formação em uma das melhores escolas do mundo, o prestigiado Le Cordon Bleu, em Paris. Foi nessa imersão, cercado pelas mais renomadas pâtisseries francesas, que nasceu o desejo de traduzir esse savoir-faire em criações únicas no Brasil. Hoje, na Selavì, essa visão se materializa em viennoiseries e doces feitos com técnica, ingredientes frescos e preparações diárias, sempre com o cuidado e a sofisticação que definem a confeitaria francesa.
                        </p>
                    </div>

                    <div className="chef-profile">
                        <img src={joaoprofile} alt="Chef João" />
                        <p>Chef Pâtissier João Guarnieri</p>
                    </div>
                </div>

                <div className="chefbloco2">
                    <div className="chef-profile">
                        <img src={natiprofile} className="nati" alt="Chef Natália" />
                        <p>Chef Boulangère Natália Moura</p>
                    </div>
                    <div className="nossoschefs-texto2">
                        <p>
                            Ao lado de sua noiva, <span className="chef-name">Chef Natália Moura</span>, com sua herança de panificação italiana, eles criaram a Selavì, no dia 09/09/2021. Uma confeitaria onde cada doce é feito com amor, técnica e ingredientes especiais, sempre com o objetivo de oferecer mais do que um simples sabor, mas uma verdadeira experiência.
                            Com quase 4 anos de atuação, a Selavì já conquistou uma clientela fiel, que compartilha da nossa paixão por entregar qualidade e dedicação em cada doce. Continuamos com o mesmo propósito de oferecer, a cada pedaço, uma verdadeira experiência de carinho e sabor.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default NossaEquipe;

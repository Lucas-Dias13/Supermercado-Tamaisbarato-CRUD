import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"
import arroz from "../assets/arroz.png"
import feijao from "../assets/feijao.png"
import acucar from "../assets/acucar.png"
import cestaBasica from "../assets/Cestabasica.png"
import { Link } from "react-router-dom"

function Home() {
    const produtosDestaque = [
        {
        nome: "Arroz 5kg",
        preco: "R$ 24,99",
        imagem: arroz,
        },
        {
        nome: "Feijão 1kg",
        preco: "R$ 7,99",
        imagem: feijao,
        },
        {
        nome: "Açúcar 5kg",
        preco: "R$ 16,99",
        imagem: acucar,
        },
    ]
  
    return (
    <>
        <Header />

        <section>
            <h2>Produtos em Destaque</h2>

            <div className="produtos">
                {produtosDestaque.map((produto, index) => (
                    <ProductCard
                        key={index}
                        nome={produto.nome}
                        preco={produto.preco}
                        imagem={produto.imagem}
                    />
                ))}
            </div>
        </section>

        <section>
            <h2>Novidades</h2>

            <article>
                <h3>Promoção da Semana</h3>
                <p>Descontos especiais em produtos da cesta básica. Aproveite!</p>
                <img src={cestaBasica} alt="Cesta básica" />
            </article>
        </section>

        <Footer />
    </>
  )
}

export default Home
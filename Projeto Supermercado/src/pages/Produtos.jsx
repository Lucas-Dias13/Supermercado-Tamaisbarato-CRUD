import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"
import arroz from "../assets/arroz.png"
import feijao from "../assets/feijao.png"
import leite from "../assets/leite.png"
import cafe from "../assets/cafe.png"
import passatempo from "../assets/passatempo.png"
import oleoSoja from "../assets/oleosoja.png"
import farinhaTrigo from "../assets/farinhatrigo.png"
import macarrao from "../assets/macarrao.png"
import manteiga from "../assets/manteiga.png"

function Produtos() {
    const produtos = [
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
            nome: "Leite 1L",
            preco: "R$ 4,99",
            imagem: leite,
        },
        {
            nome: "Café 1kg",
            preco: "R$ 7,99",
            imagem: cafe,
        },
        {
            nome: "Biscoito Recheado 130g",
            preco: "R$ 3,99",
            imagem: passatempo,
        },
        {
            nome: "Óleo de Soja 900ml",
            preco: "R$ 6,49",
            imagem: oleoSoja,
        },
        {
            nome: "Farinha de Trigo 1kg",
            preco: "R$ 4,49",
            imagem: farinhaTrigo,
        },
        {
            nome: "Macarrão 500g",
            preco: "R$ 3,99",
            imagem: macarrao,
        },
        {
            nome: "Manteiga 500g",
            preco: "R$ 29,99",
            imagem: manteiga,
        },
    ]

    return (
        <>
            <Header />

            <main>
                <h2>Produtos</h2>

                <section>
                    <div className="produtos">
                        {produtos.map((produto, index) => (
                            <ProductCard
                                key={index}
                                nome={produto.nome}
                                preco={produto.preco}
                                imagem={produto.imagem}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Produtos
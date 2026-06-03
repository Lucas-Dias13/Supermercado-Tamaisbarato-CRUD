import Header from "../components/Header"
import Footer from "../components/Footer"
import arroz from "../assets/arroz.png"
import feijao from "../assets/feijao.png"
import leite from "../assets/leite.png"

function Carrinho() {
    const produtosCarrinho = [
        {
            nome: "Arroz 5kg",
            preco: 24.99,
            imagem: arroz,
        },
        {
            nome: "Feijão 1kg",
            preco: 7.99,
            imagem: feijao,
        },
        {
            nome: "Leite 1L",
            preco: 4.99,
            imagem: leite,
        },
    ]

    const total = produtosCarrinho.reduce(
        (soma, produto) => soma + produto.preco, 0
    )

    return (
        <>
            <Header />

            <main>
                <h2>Seu Carrinho</h2>

                <section>
                    <div className="produtos">
                        {produtosCarrinho.map(
                            (produto, index) => (
                                <div className="card" key={index}>
                                    <img src={produto.imagem} alt={produto.nome} className="produto" />
                                    <p>{produto.nome}</p>
                                    <p>R${" "} {produto.preco.toFixed(2).replace(".", ",")}</p>
                                </div>
                            )
                        )}
                    </div>
                </section>

                <section className="resumo">
                    <h3>Total: R${" "} {total.toFixed(2).replace(".", ",")}</h3>

                    <button className="botao-finalizar">
                        Finalizar Compra
                    </button>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Carrinho
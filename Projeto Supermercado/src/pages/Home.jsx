import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"
import arroz from "../assets/arroz.png"
import feijao from "../assets/feijao.png"
import acucar from "../assets/acucar.png"
import cestaBasica from "../assets/Cestabasica.png"

function Home() {
  const produtosDestaque = [
    {
      id: 1,
      nome: "Arroz 5kg",
      preco: 24.99,
      imagem: arroz,
    },
    {
      id: 2,
      nome: "Feijão 1kg",
      preco: 7.99,
      imagem: feijao,
    },
    {
      id: 10,
      nome: "Açúcar 5kg",
      preco: 16.99,
      imagem: acucar,
    },
  ]

  return (
    <>
      <div className="pagina">
        <Header />

        <main>
          <section>
            <h2>Produtos em Destaque</h2>

            <div className="produtos">
              {produtosDestaque.map((produto) => (
                <ProductCard
                  key={produto.id}
                  id={produto.id}
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
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Home
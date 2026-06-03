import { useEffect, useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Carrinho() {
  const [carrinho, setCarrinho] = useState(() => {
    return JSON.parse(localStorage.getItem("carrinho") || "[]")
  })

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho))
  }, [carrinho])

  const aumentarQuantidade = (id) => {
    setCarrinho(
      carrinho.map((item) => item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item)
    )
  }

  const diminuirQuantidade = (id) => {
    setCarrinho(
      carrinho
        .map((item) => item.id === id ? {
            ...item, quantidade : item.quantidade > 1 ? item.quantidade - 1 : 1,
              } : item)
    )
  }

  const removerProduto = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id))
  }

  const limparCarrinho = () => {
    setCarrinho([])
  }

  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade, 0
  )

  return (
    <>
      <Header />

      <main>
        <h2>Seu Carrinho</h2>

        {carrinho.length === 0 ? (
          <section className="resumo">
            <h3>Seu carrinho está vazio</h3>
            <p>Adicione produtos para continuar.</p>
          </section>
        ) : (
          <>
            <section>
              <div className="produtos">
                {carrinho.map((produto) => (
                  <div className="card" key={produto.id}>
                    <img
                      src={produto.imagem}
                      alt={produto.nome}
                      className="produto"
                    />
                    <h3>{produto.nome}</h3>

                    <p>
                      R$ {Number(produto.preco).toFixed(2).replace(".", ",")}
                    </p>

                    <p>
                      Quantidade: {produto.quantidade}
                    </p>

                    <p>
                      Subtotal: R${" "}
                      {(
                        produto.preco * produto.quantidade
                      )
                        .toFixed(2)
                        .replace(".", ",")}
                    </p>

                    <div className="acoes-carrinho">
                      <button type="button" className="botao-quantidade" onClick={() => diminuirQuantidade(produto.id)}>
                        -
                      </button>

                      <button type="button" className="botao-quantidade" onClick={() => aumentarQuantidade(produto.id)}>
                        +
                      </button>

                      <button type="button" className="botao-remover-carrinho" onClick={() => removerProduto(produto.id)}>
                        Remover
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="resumo">
              <h3>Total: R$ {total.toFixed(2).replace(".", ",")}</h3>

              <button type="button" className="botao-finalizar">
                Finalizar Compra
              </button>

              <button type="button" className="botao-limpar-carrinho" onClick={limparCarrinho}>
                Limpar Carrinho
              </button>
            </section>
          </>
        )}
      </main>

      <Footer />
    </>
  )
}

export default Carrinho
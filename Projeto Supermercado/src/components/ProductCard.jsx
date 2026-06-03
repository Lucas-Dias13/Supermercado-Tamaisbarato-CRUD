import { useNavigate } from "react-router-dom"

function ProductCard({ id, nome, preco, imagem }) {
  const navigate = useNavigate()

  const adicionarAoCarrinho = () => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

    const produtoExistente = carrinho.find((item) => item.id === id)

    if (produtoExistente) {
      produtoExistente.quantidade += 1
    } else {
      carrinho.push({
        id,
        nome,
        preco: Number(preco),
        imagem,
        quantidade: 1,
      })
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho))
    navigate("/carrinho")
  }

  return (
    <div className="card">
      <img src={imagem} alt={nome} className="produto" />
      <p>{nome}</p>
      <p>R$ {Number(preco).toFixed(2).replace(".", ",")}</p>

      <button type="button" onClick={adicionarAoCarrinho}>
        Adicionar ao carrinho
      </button>
    </div>
  )
}

export default ProductCard
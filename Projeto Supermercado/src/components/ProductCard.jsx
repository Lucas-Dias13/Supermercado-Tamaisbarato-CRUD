import { Link } from "react-router-dom"

function ProductCard({ nome, preco, imagem }) {
  return (
    <div className="card">
        <img src={imagem} alt={nome} className="produto" />
        <p>{nome}</p>
        <p>{preco}</p>
        <Link to="/carrinho">Adicionar ao carrinho</Link>
    </div>
  )
}

export default ProductCard
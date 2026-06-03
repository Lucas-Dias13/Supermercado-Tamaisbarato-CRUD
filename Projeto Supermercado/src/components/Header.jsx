import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import carrinho from "../assets/carrinho.png"

function Header() {
  return (
    <header>
        <div>
            <img src={logo} alt="Logo" className="logo" />
        </div>

        <nav>
            <ul>
                <li>
                    <Link to="/">Página Principal</Link>
                </li>

                <li>
                    <Link to="/produtos">Produtos</Link>
                </li>

                <li>
                    <Link to="/faleconosco">Fale Conosco</Link>
                </li>
            </ul>
        </nav>

        <div>
            <Link to="/carrinho" className="botao-carrinho">
                <img src={carrinho} alt="Carrinho" className="carrinho" />
            </Link>
        </div>
    </header>
  )
}

export default Header
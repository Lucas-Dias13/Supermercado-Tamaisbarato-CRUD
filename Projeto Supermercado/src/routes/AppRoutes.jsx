import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'
import Carrinho from '../pages/Carrinho'
import FaleConosco from '../pages/FaleConosco'
import CadastroProdutos from '../pages/CadastroProdutos'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/faleconosco" element={<FaleConosco />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/cadastro-produtos" element={<CadastroProdutos />} />
        </Routes>
    )
}

export default AppRoutes
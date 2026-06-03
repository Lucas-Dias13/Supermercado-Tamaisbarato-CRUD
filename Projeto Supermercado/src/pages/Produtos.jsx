import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"

function Produtos() {
    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    return (
        <>
            <Header />

            <main>
                <h2>Produtos</h2>

                <section>
                    <div className="produtos">
                        {produtos.map((produto) => (
                            <ProductCard
                                key={produto.id}
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
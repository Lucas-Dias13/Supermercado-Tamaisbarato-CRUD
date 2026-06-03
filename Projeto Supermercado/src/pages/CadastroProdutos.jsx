import { useEffect, useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import arroz from "../assets/arroz.png"
import feijao from "../assets/feijao.png"
import leite from "../assets/leite.png"
import cafe from "../assets/cafe.png"
import passatempo from "../assets/passatempo.png"
import oleoSoja from "../assets/oleosoja.png"
import farinhaTrigo from "../assets/farinhatrigo.png"
import macarrao from "../assets/macarrao.png"
import manteiga from "../assets/manteiga.png"

function CadastroProdutos() {
    const produtosPadrao = [
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
            id: 3,
            nome: "Leite 1L",
            preco: 4.99,
            imagem: leite,
        },
        {
            id: 4,
            nome: "Café 1kg",
            preco: 7.99,
            imagem: cafe,
        },
        {
            id: 5,
            nome: "Biscoito Recheado 130g",
            preco: 3.99,
            imagem: passatempo,
        },
        {
            id: 6,
            nome: "Óleo de Soja 900ml",
            preco: 6.49,
            imagem: oleoSoja,
        },
        {
            id: 7,
            nome: "Farinha de Trigo 1kg",
            preco: 4.49,
            imagem: farinhaTrigo,
        },
        {
            id: 8,
            nome: "Macarrão 500g",
            preco: 3.99,
            imagem: macarrao,
        },
        {
            id: 9,
            nome: "Manteiga 500g",
            preco: 29.99,
            imagem: manteiga,
        },
    ]

    const [produtoAtual, setProdutoAtual] = useState({
        id: null,
        nome: "",
        preco: "",
        imagem: "",
    })

    const [produtos, setProdutos] = useState(() => {
        const produtosSalvos = localStorage.getItem("produtos");
        return produtosSalvos ? JSON.parse(produtosSalvos) : produtosPadrao;
    })

    const [editando, setEditando] = useState(false)

    useEffect(() => {
        localStorage.setItem("produtos", JSON.stringify(produtos));
    }, [produtos])

    const handleChange = (e) => {
        setProdutoAtual({
            ...produtoAtual, [e.target.name]: e.target.value,
        })
    }

    const handleImagem = (e) => {
        const arquivo = e.target.files[0];

        if (!arquivo) return;

        const reader = new FileReader();

        reader.onloadend = () => {
            setProdutoAtual((prev) => ({
                ...prev, imagem: reader.result,
            }))
        }

        reader.readAsDataURL(arquivo);
    }

    const salvarProduto = (e) => {
        e.preventDefault();

        if (editando) {
            setProdutos(
                produtos.map((produto) =>
                    produto.id === produtoAtual.id ? produtoAtual : produto
                )
            )

            setEditando(false);

        } else {
            const novoProduto = {
                ...produtoAtual, id: Date.now(),
            }

            setProdutos([...produtos, novoProduto]);
        }

        setProdutoAtual({
            id: null,
            nome: "",
            preco: "",
            imagem: "",
        })
    }

    const editarProduto = (produto) => {
        setProdutoAtual(produto);
        setEditando(true);
    }

    const excluirProduto = (id) => {
        setProdutos(
            produtos.filter(
                (produto) => produto.id !== id
            )
        )
    }

    const restaurarProdutos = () => {
        localStorage.removeItem("produtos");
        window.location.reload();
    }

    return (
        <>
            <Header />

            <main>
                <h2>Cadastro de Produtos</h2>

                <form className="contato" onSubmit={salvarProduto}>
                    
                    <label>Nome do Produto</label>
                    <input
                        type="text"
                        name="nome"
                        value={produtoAtual.nome}
                        onChange={handleChange}
                        required
                    />

                    <label>Preço</label>
                    <input
                        type="number"
                        step="0.01"
                        name="preco"
                        value={produtoAtual.preco}
                        onChange={handleChange}
                        required
                    />

                    <label>Imagem</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImagem}
                    />

                    {produtoAtual.imagem && (
                        <div className="previa-imagem">
                            <img src={produtoAtual.imagem} alt="Prévia" />
                        </div>
                    )}

                    <button type="submit">
                        {editando ? "Atualizar Produto" : "Cadastrar Produto"}
                    </button>
                </form>

                <section>
                    <h2>Produtos Cadastrados</h2>

                    <div className="produtos">
                        {produtos.map((produto) => (
                            <div className="card" key={produto.id}>
                                <img src={produto.imagem} alt={produto.nome} className="produto" />

                                <h3>{produto.nome}</h3>

                                <p>R$ {Number(produto.preco).toFixed(2).replace(".", ",")}</p>

                                <div className="acoes-produto">
                                    <button className="botao-editar" onClick={() => editarProduto(produto)}>
                                        Editar
                                    </button>

                                    <button className="botao-excluir" onClick={() => excluirProduto(produto.id)}>
                                        Excluir
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="area-restaurar">
                        <button className="botao-restaurar" onClick={restaurarProdutos}>
                            Restaurar Produtos Originais
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default CadastroProdutos;
import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

function FaleConosco() {
    const [formulario, setFormulario] = useState({
        nome: "",
        email: "",
        mensagem: "",
    })

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formulario);
        alert("Mensagem enviada com sucesso!");

        setFormulario({
            nome: "",
            email: "",
            mensagem: "",
        })
    }

    return (
        <>
            <div className="pagina">
                <Header />

                <main>
                    <h2>Fale Conosco</h2>

                    <form className="contato" onSubmit={handleSubmit}>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={formulario.nome}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formulario.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            value={formulario.mensagem}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">Enviar</button>
                    </form>
                </main>

                <Footer />
            </div>
        </>
    )
}

export default FaleConosco
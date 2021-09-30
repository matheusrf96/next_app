import { useState } from "react"
import Layout from "../components/Layout"

export default function Integration() {

    const [client, setClient] = useState({})
    const [id, setId] = useState(1)

    async function getClient() {
        const resp = await fetch(`http://localhost:3000/api/clients/${ id }`)
        const data = await resp.json()
        setClient(data)

        // fetch(`http://localhost:3000/api/clients/${ id }`)
        //     .then(resp => resp.json())
        //     .then(data => setClient(data))
    }

    return (
        <Layout>
            <div>
                <input type="number" value={ id } onChange={ (e) => setId(e.target.value) } />
                <button onClick={ getClient }>Obter Cliente</button>
            </div>

            <ul>
                <li>Código: { client.id }</li>
                <li>Nome: { client.name }</li>
                <li>Idade: { client.age }</li>
            </ul>
        </Layout>
    )
}

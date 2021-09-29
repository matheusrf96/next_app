import { useState } from "react";

import Layout from "../components/Layout";

export default function State() {
    const [num, setNum] = useState(0)

    const inc = () => {
        setNum(num + 1)
    }

    return (
        <Layout title="Componente com estado">
            <span>{ num } </span>
            <button onClick={ inc }>+1</button>
        </Layout>
    )
}
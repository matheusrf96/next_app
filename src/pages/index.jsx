import Browser from '../components/Browser'

import styles from '../styles/Index.module.css'

export default function Home() {
    return (
        <div className={ styles.main }>
            <Browser destination="/stylish" text="Estiloso" color="crimson" />
            <Browser destination="/example" text="Exemplo" />
            <Browser destination="/navigation" text="Navegação #01" color="orange" />
            <Browser destination="/client/store-a/123" text="Navegação #02" color="blue" />
            <Browser destination="/state" text="Componente com estado" color="pink" />
            <Browser destination="/integration_1" text="Integração com API #01" color="#a45b71" />
            <Browser destination="/static_content" text="Conteúdo Estático" color="#fa054a" />
        </div>
    )
}

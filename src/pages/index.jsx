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
        </div>
    )
}

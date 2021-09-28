import Browser from '../components/Browser'

import styles from '../styles/Index.module.css'

export default function Home() {
    return (
        <div className={ styles.main }>
            <Browser destination="/stylish" text="Estiloso" color="crimson" />
            <Browser destination="/example" text="Exemplo" />
        </div>
    )
}

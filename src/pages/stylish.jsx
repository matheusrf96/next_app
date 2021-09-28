import styles from '../styles/stylish.module.css'
import Link from 'next/link'


export default function Stylish() {
    return (
        <div className={ styles.purple }>
            <Link href="/">Voltar</Link>
            <h1>Estilo usando CSS módulos</h1>
        </div>
    )
}
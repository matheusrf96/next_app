import Link from 'next/link'

import styles from '../styles/Browser.module.css'

export default function Browser(props) {
    return (
        <Link href={ props.destination } passHref>
            <div className={ styles.browser } style={{
                backgroundColor: props.color ?? '#1e90ff'
            }}>
                { props.text }
            </div>
        </Link>
    )
}
import Layout from "../../../components/Layout";
import { useRouter } from 'next/router'

export default function Code(props) {
    const router = useRouter()

    return (
        <Layout title="Dynamic navigation">
            <div>Loja: { router.query.store }</div>
            <div>Código: { router.query.code }</div>
        </Layout>
    )
}

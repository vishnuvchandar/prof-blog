import Layout from '../components/shared/Layout'
import '../styles/antd.less'

const App = ({ Component, pageProps }) => {

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default App
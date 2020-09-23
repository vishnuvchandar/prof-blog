import Home from "../../components/Home"
import Head from 'next/head'

const welcome = () =>
    (
        <div>
            <Head>
                <title>EMR3.0</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Home />
        </div>
    )


export default welcome
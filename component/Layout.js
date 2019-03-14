import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props) => (
    <div>
        <Head>
            <title>Where my pets</title>
            
            
        </Head>

        <Navbar />
        <div className="container">
            {props.children}
            
        </div>
        <Footer />
    </div>
)

export default Layout
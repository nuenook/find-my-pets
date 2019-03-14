import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

import React, { Component } from 'react'

class Layout extends Component {

    componentDidMount = () => {
        $('.sidenav').sidenav();
    }
    render () {
        return (
            <div>
                <Head>
                    <title>Where my pets</title>
                    
                </Head>
        
                <Navbar />
                <div className="container">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Layout
import Link from 'next/link'
import $ from 'jquery'
import React, { Component } from 'react'

const Menus = [
    {
        name: 'Login',
        path: '/login'
    },
    {
        name: 'Sign Up',
        path: '/register'
    },
    {
        name: 'Insert pet',
        path: '/insert-pet'
    },
    {
        name: 'About',
        path: '/about'
    }
]


if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
    require('materialize-css');
}

class Navbar extends Component {

    componentDidMount = () => {
        $('.sidenav').sidenav();
    }

    render () {
        return (
            <nav className="light-blue lighten-1" role="navigation">
                <div className="nav-wrapper container"><Link href="/" ><a id="logo-container" className="brand-logo">Find My Pets</a></Link>
                <ul className="right hide-on-med-and-down">
                    { Menus.map(m => (
                        <Link key={m.name} href={m.path}><li><a >{m.name}</a></li></Link>
                    ))}
                </ul>
        
                <ul id="nav-mobile" className="sidenav">
                    { Menus.map(m => (
                        <Link key={m.name} href={m.path}><li><a >{m.name}</a></li></Link>
                    ))}
                </ul>
                <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
          </nav>
        )
        
    }
}

export default Navbar

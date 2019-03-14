import Link from 'next/link'

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
        name: 'insert pet',
        path: '/insert-pet'
    }
]

const Navbar = () => (
    <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Logo</a>
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

export default Navbar
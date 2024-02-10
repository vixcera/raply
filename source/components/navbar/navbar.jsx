import { LazyLoadImage } from "react-lazy-load-image-component"
import { NavLink } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {

    const handleSidebar = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.classList.toggle('show')
    }

    const kirimpesan = () => {
        const link = "https://wa.me/62895320141471?text=Halo%2C%20apakah%20ada%20paket%20DP%20ringan?"
        window.open(link)
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <LazyLoadImage className="nav-img" src="/logo.png"/>
                <div className="nav-title">Ramdani</div>
            </div>
            <div className="nav-menu">
                <NavLink className="navlink" to="/">Beranda</NavLink>
                <NavLink className="navlink" to="/sosmed">Konten lainnya</NavLink>
                <NavLink className="navlink" to="/tentang">Tentang</NavLink>
                <div className="button" onClick={() => kirimpesan()} style={{ marginLeft: '10px', color: 'var(--black)'}}>Hubungi</div>
            </div>
            <div className="nav-mobile">
                <div className="i fa-solid fa-bars fa-xl" onClick={() => handleSidebar()}></div>
            </div>
        </div>
    )
}

export default Navbar
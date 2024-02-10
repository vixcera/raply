import { NavLink } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "./sidebar.css"

const Sidebar = () => {

    const kirimpesan = () => {
        const link = "https://wa.me/62895320141471?text=Halo%2C%20apakah%20ada%20paket%20DP%20ringan?"
        window.open(link)
    }

    const hideSidebar = () => {
        if (document.querySelector('.sidebar').classList.contains('show')) {
            document.querySelector('.sidebar').classList.remove('show')
        }
    }

    return (
        <div className="sidebar" onClick={() => hideSidebar()}>
            <div className="nav-logo" style={{position: 'absolute', top: '20px', left: '15px', height: 'max-content'}}>
                <LazyLoadImage className="nav-img" src="/logo.png"/>
                <div className="nav-title">Ramdani</div>
            </div>
            <div className="sideitem">
                <div className="topside">
                    <NavLink className="sidelist" to="/">
                        <i className="fa-solid fa-home fa-xl"/>
                        <div className="sidetext">Beranda</div>
                    </NavLink>
                    <NavLink className="sidelist" to="/sosmed">
                        <i className="fa-solid fa-layer-group fa-xl"></i>
                        <div className="sidetext">Konten lainnya</div>
                    </NavLink>
                    <NavLink className="sidelist" to="/tentang">
                        <i className="fa-solid fa-circle-info fa-2xl" style={{fontSize: '1.7rem'}}></i>
                        <div className="sidetext">Tentang</div>
                    </NavLink>
                </div>
                <div className="botside">
                    <div className="sidelist" onClick={() => kirimpesan()}>
                        <div className="fa-solid fa-phone fa-xl"/>
                        <div className="sidetext">Hubungi</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
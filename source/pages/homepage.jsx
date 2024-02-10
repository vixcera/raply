import Navbar from "../components/navbar/navbar"
import Sosmed from "../components/sosmed/sosmed"
import Bannerbox from "../components/bannerbox/bannerbox"
import Sidebar from "../components/sidebar/sidebar"
import Tentang from "../components/tentang/tentang"

const Homepage = () => {

    let path = location.pathname

    return(
        <section>
            <div className="page-max">
                <Navbar/>
                <Sidebar/>
                {(path == '/') && (<Bannerbox/>)}
                {(path == '/sosmed') && (<Sosmed/>)}
                {(path == '/tentang') && (<Tentang/>)}
            </div>
        </section>
        
    )
}

export default Homepage
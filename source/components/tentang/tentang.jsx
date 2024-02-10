import { LazyLoadImage } from "react-lazy-load-image-component"
import "./tentang.css"

const Tentang = () => {

    const kirimpesan = () => {
        const link = "https://wa.me/62895320141471?text=Halo%2C%20apakah%20ada%20paket%20DP%20ringan?"
        window.open(link)
    }

    return (
        <div className="container" style={{marginTop: '55px', paddingBottom: '30px'}}>
            <div className="box-profile">
                <LazyLoadImage className="img-profile" src="/ramdani.jpeg"/>
                <div className="title" style={{fontSize: '1.8rem',marginTop: '20px'}}>Ramdani</div>
                <div className="title" style={{fontSize: "1.2rem", color: '#aaa', textAlign: 'center', marginTop: '5px'}}>Sales Consultant - on Honda Sholeh Iskandar</div>
            </div>
            <div className="title" style={{marginTop: '30px', textAlign: 'center'}}>Kontak Saya</div>
            <div className="box sosmed" onClick={() => kirimpesan()}>
                <div className="box-logo"><div className="fa-brands fa-whatsapp fa-lg"/></div>
                <div className="title">Whatsapp</div>
            </div>
            <div className="box sosmed" onClick={() => window.location.href = "mailto:raflyrizki89@gmail.com"}>
                <div className="box-logo"><div className="fa-regular fa-envelope fa-lg"/></div>
                <div className="title">Email</div>
            </div>
            <div className="lokasi" style={{marginTop: '40px'}}>
                <div className="title" style={{textAlign: 'center', color: 'var(--text)'}}>Map Lokasi</div>
                <iframe className="map-lokasi" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.676491299696!2d106.79822380921392!3d-6.562456993403333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5c5fb818373%3A0xbae74ab7972e2b82!2sHonda%20Sholeh%20Iskandar!5e0!3m2!1sid!2sid!4v1707057730653!5m2!1sid!2sid" allowFullScreen="off" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Tentang
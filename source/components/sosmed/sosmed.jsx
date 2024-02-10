import Swal from "sweetalert2"
import "./sosmed.css"

const Sosmed = () => {

    const linkIG = "https://www.instagram.com/ramdani.hondasholehiskandar/"
    const linkFB = "https://www.facebook.com/RAMDANI.HONDASHOLEHISKANDAR/"
    const linkTT = "https://www.tiktok.com/@ramdani.sholehiskandar"

    const display = async (img) => {
        return Swal.fire({
            imageUrl: img,
            confirmButtonText: 'Download',
            focusConfirm: false,
            showCloseButton: true,
            confirmButtonColor: "var(--black)"
        })
        .then((res) => {
            if (res.isConfirmed) {
                const link = document.createElement('a')
                link.href = img
                link.download = img.slice(1)
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
            }
        })
    }

    return (
        <div className="container" style={{marginTop: '55px', paddingBottom: '30px'}}>
            <div className="title" style={{textAlign: 'center', color: 'var(--text)'}}>Temukan <span style={{color: 'var(--red)'}}>Konten & promo<br/> menarik</span> lainnya :</div>
            <div className="box sosmed" onClick={() => location.href = linkIG}>
                <div className="box-logo"><div className="fa-brands fa-instagram fa-lg"/></div>
                <div className="title">Instagram</div>
            </div>
            <div className="box sosmed" onClick={() => location.href = linkTT}>
                <div className="box-logo"><div className="fa-brands fa-tiktok fa-lg"/></div>
                <div className="title">Tiktok</div>
            </div>
            <div className="box sosmed" onClick={() => location.href = linkFB}>
                <div className="box-logo"><div className="fa-brands fa-facebook fa-lg"/></div>
                <div className="title">Facebook</div>
            </div>
            <div className="title" style={{marginTop: '40px', textAlign: 'center'}}>Info <span style={{color:'var(--red)'}}>Lainnya</span></div>
            <div className="box sosmed" onClick={() => display("/pricelist.jpeg")}>
                <div className="box-logo"><div className="fa-solid fa-tags fa-lg"/></div>
                <div className="title">Price List</div>
            </div>
            <div className="box sosmed">
                <div className="box-logo"><div className="fa-solid fa-award fa-lg"/></div>
                <div className="title">Extended Warranty</div>
            </div>
        </div> 
    )
}

export default Sosmed
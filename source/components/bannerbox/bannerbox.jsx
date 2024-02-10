import {  useEffect, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Banner from "./banner"
import "./bannerbox.css"
import swalert from "../../../utils/swalert"

const Bannerbox = () => {

    const descehev = "Teknologi e:HEV memungkinkan mobil untuk mengisi daya sendiri, yang dihasilkan dari combustion engine dan regenerative braking saat berkendara."
    const descsensing = "Honda SENSING  adalah serangkaian teknologi keselamatan yang memberikan perlindungan menyeluruh bagi pengemudi dan penumpang dengan memberikan peringatan atau secara otomatis mengambil tindakan untuk mengurangi risiko kecelakaan."
    const descconnect = "Teknologi ini memungkinkan Anda menonaktifkan mesin dari jarak jauh atau mencegah kendaraan untuk dihidupkan, sehingga memberikan lapisan keamanan tambahan terhadap penggunaan atau pencurian yang tidak sah (Hanya tersedia di Honda Accord.)"

    const [ merk, setMerk ] = useState("HR-V")

    const image = () => {
        if (merk === "HR-V") return "/hrv.png"
        if (merk === "BR-V") return "/brv.png"
        if (merk === "WR-V") return "/wrv.png"
    }

    const handleContent = (classname) => {
        const box = document.querySelector(`${classname}`)
        box.classList.toggle('show')
    }

    return(
        <>
        {(merk == 'HR-V') && (<Banner.Hrv />)}
        {(merk == 'BR-V') && (<Banner.Brv/>)}
        {(merk == 'WR-V') && (<Banner.Wrv/>)}
        {(merk == "CR-V") && (<Banner.Crv/>)}
        {(merk == "Brio") && (<Banner.Brio/>)}
        {(merk == "City") && (<Banner.City/>)}
        {(merk == "Civic") && (<Banner.Civic/>)}
        {(merk == "Accord") && (<Banner.Accord/>)}
        <div className="switch">
            <div className="switch-container">
                <div className="button" style={{backgroundColor: 'var(--white)'}} onClick={() => setMerk("HR-V")}>HR-V</div>
                <div className="button" style={{backgroundColor: '#aaa'}}  onClick={() => setMerk("BR-V")}>BR-V</div>
                <div className="button" style={{backgroundColor: 'var(--red)'}}  onClick={() => setMerk("WR-V")}>WR-V</div>
                <div className="button" style={{backgroundColor: 'var(--blue)'}}  onClick={() => setMerk("CR-V")}>CR-V</div>
                <div className="button" style={{backgroundColor: '#e9e991'}}  onClick={() => setMerk("Brio")}>Brio</div>
                <div className="button" style={{backgroundColor: '#D65359'}}  onClick={() => setMerk("City")}>City</div>
                <div className="button" style={{backgroundColor: 'var(--white)'}}  onClick={() => setMerk("Civic")}>Civic</div>
                <div className="button" style={{backgroundColor: '#aaa'}}  onClick={() => setMerk("Accord")}>Accord</div>
            </div>
        </div>
        <div className="container">
            <div className="box-promo">
                <div className="title" style={{color: 'var(--black)'}}>Promo bulan ini</div>
                <div style={{fontWeight: 'bold', margin: '15px 10px'}}>
                    <div className="desc">- Dp rendah mulai dari 20 Jutaan</div>
                    <div className="desc">- Angsuran mulai 2 Jutaan</div>
                    <div className="desc">- Tenor sampai 8 Tahun</div>
                    <div className="desc">- Trade in all merk dengan harga terbaik</div>
                    <div className="desc">- Paket service 4 tahun / 50 Rb Km</div>
                    <div className="desc">- Diskon puluhan juta dijamin maksimal</div>
                </div>
                <div className="title" style={{color: 'var(--black)'}}>Bonus langsung</div>
                <div style={{fontWeight: 'bold', margin: '15px 10px'}}>
                    <div className="desc">✔ Karpet beludru</div>
                    <div className="desc">✔ Dompet STNK</div>
                    <div className="desc">✔ Kotak obat</div>
                    <div className="desc">✔ Segitiga pengaman</div>
                    <div className="desc">✔ Kaca film garansi 5th</div>
                    <div className="desc">✔ Tatakan plat nomor</div>
                    <div className="desc">✔ Dongkrak + Tool kit</div>
                    <div className="desc">✔ Payung golf</div>
                    <div className="desc">✔ Free jasa service selama 4th / 50rb Km</div>
                    <div className="desc">✔ Free layanan bantuan darurat 3th</div>
                    <div className="desc">✔ Free cuci mobil saat service</div>
                    <div className="desc">✔ Free exclusive member service 3th</div>
                    <div className="desc">✔ pengurusan STNK cepat</div>
                    <div className="desc">✔ APAR * Alat Pemadam Api Ringan</div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="title" style={{marginLeft: '5px'}}>Honda Teknologi</div>
            <div className="box" onClick={() => swalert('/ehev.mp4', "e:HEV", descehev)}>
                <div className="box-img-container">
                    <LazyLoadImage className="box-img" src="https://asset.honda-indonesia.com/2023/10/19/ehev.svg" loading="lazy" effect="blur"/>
                </div>
            </div>
            <div className="box" onClick={() => swalert('/sensing.mp4', "SENSING", descsensing)}>
                <div className="box-img-container">
                    <LazyLoadImage className="box-img" src="https://asset.honda-indonesia.com/2023/10/19/sensing.svg" loading="lazy" effect="blur"/>
                </div>
            </div>
            <div className="box" onClick={() => swalert('/connect.mp4', "CONNECT", descconnect)}>
                <div className="box-img-container">
                    <LazyLoadImage className="box-img" src="https://asset.honda-indonesia.com/2023/10/19/connect.svg" loading="lazy" effect="blur"/>
                </div>
            </div>
            <div className="title" style={{marginTop: '20px', marginLeft: '5px'}}>Our Service</div>
            <div className="box" onClick={() => handleContent('.box-experience')}>
                <div className="box-img-container" style={{gap: '15px', flexDirection: 'row'}}>
                    <div className="fa-solid fa-phone fa-xl"></div>
                    <div className="title" style={{color: 'var(--black)'}}>Honda Experience</div>
                </div>
                <div className="box-experience">
                    <div className="desc" style={{ marginTop: '10px', textAlign: 'center' }}>
                        Experience Honda merupakan program layanan bantuan darurat 24 Jam yang diberikan secara eksklusif kepada anda selama berkendara dengan Honda. 
                    </div>
                </div>
            </div>
            <div className="box" onClick={() => handleContent('.box-ecare')}>
                <div className="box-img-container" style={{gap: '15px', flexDirection: 'row'}}>
                    <div className="fa-solid fa-mobile-phone fa-xl"></div>
                    <div className="title" style={{color: 'var(--black)'}}>Honda E-Care</div>
                </div>
                <div className="box-ecare">
                    <div className="desc" style={{ marginTop: '10px', textAlign: 'center' }}>
                        Honda e-Care” adalah Layanan aplikasi bagi konsumen mobil Honda di Indonesia yang tersedia pada sistem operasi berbasis Android dan IOS, termasuk juga pada web yang dibuat untuk memudahkan Anda dalam menunjang aktivitas penggunaan dan/atau perawatan kendaraan Honda di dealer-dealer resmi Kami.
                    </div>
                </div>
            </div>
            <div className="box" onClick={() => handleContent('.box-service')}>
                <div className="box-img-container" style={{gap: '15px', flexDirection: 'row'}}>
                    <div className="fa-solid fa-calendar-days fa-xl"></div>
                    <div className="title" style={{color: 'var(--black)'}}>Booking Service</div>
                </div>
                <div className="box-service">
                    <div className="desc" style={{ marginTop: '10px', textAlign: 'center' }}>
                    layanan yang memberikan kemudahan customer mengatur waktu kedatangan servis ke bengkel resmi sehingga dapat mempersingkat waktu dari antrian panjang.
                    </div>
                </div>
            </div>
            <div className="box" onClick={() => handleContent('.box-warranty')}>
                <div className="box-img-container" style={{gap: '15px', flexDirection: 'row'}}>
                    <div className="fa-solid fa-award fa-xl"></div>
                    <div className="title" style={{color: 'var(--black)'}}>Honda Warranty</div>
                </div>
                <div className="box-warranty">
                    <div className="desc" style={{ marginTop: '10px', textAlign: 'center' }}>
                    Merupakan garansi yang berlaku untuk perbaikan atas kerusakan atau cacat yang timbul selama jangka waktu tertentu atau jarak yang telah ditentukan, yaitu selama pemakaian 3 tahun atau jarak tempuh 100.000 kilometer (mana yang tercapai terlebih dahulu).
                    </div>
                </div>
            </div>
            <div className="box-profile">
                <div className="title" style={{fontSize: '1.8rem',marginTop: '20px'}}>Ramdani</div>
                <div className="title" style={{fontSize: "1.2rem", color: '#aaa', textAlign: 'center', marginTop: '5px'}}>Sales Consultant - on Honda Sholeh Iskandar</div>
                <div className="title" style={{fontSize: "1.2rem", textAlign: 'center', marginTop: '30px'}}>BOOKING NOW</div>
                <div className="title" style={{fontSize: "1.2rem", textAlign: 'center', marginTop: '5px'}}>{`${'0895320141471 ( Dani )'}`}</div>
                <div className="title" style={{fontSize: "1.2rem", textAlign: 'center', marginTop: '30px'}}>Address</div>
                <div className="title" style={{fontSize: "1.2rem", color: '#aaa', textAlign: 'center', marginTop: '5px'}}>Jl. Sholeh Iskandar No.27, RT/RW 001/008 Kota Bogor, Kecamatan Tanah Sareal, Kelurahan Kedung Badak, Jawa Barat 16164, Indonesia.</div>
                <div className="title" style={{fontSize: "0.8rem", color: '#aaa', textAlign: 'center', marginTop: '100px'}}>Copyright © 2024 Ramdani Honda Bogor</div>
            </div>
        </div>
        </>
    )
}

export default Bannerbox;
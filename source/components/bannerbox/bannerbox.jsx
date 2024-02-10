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
                <h3 className="button" style={{backgroundColor: '#e9e991'}}  onClick={() => setMerk("Brio")}>Brio</h3>
                <h3 className="button" style={{backgroundColor: 'var(--red)'}}  onClick={() => setMerk("WR-V")}>WR-V</h3>
                <h3 className="button" style={{backgroundColor: '#aaa'}}  onClick={() => setMerk("BR-V")}>BR-V</h3>
                <h3 className="button" style={{backgroundColor: 'var(--white)'}} onClick={() => setMerk("HR-V")}>HR-V</h3>
                <h3 className="button" style={{backgroundColor: '#D65359'}}  onClick={() => setMerk("City")}>City</h3>
                <h3 className="button" style={{backgroundColor: 'var(--blue)'}}  onClick={() => setMerk("CR-V")}>CR-V</h3>
                <h3 className="button" style={{backgroundColor: 'var(--white)'}}  onClick={() => setMerk("Civic")}>Civic</h3>
                <h3 className="button" style={{backgroundColor: '#aaa'}}  onClick={() => setMerk("Accord")}>Accord</h3>
            </div>
        </div>
        <div className="container">
            <div className="box-promo">
                <h1 style={{color: 'var(--black)', fontSize: "1.6rem"}}>Promo bulan ini</h1>
                <h3 style={{fontWeight: 'bold', margin: '15px 10px', lineHeight: '30px'}}>
                    <h3 className="desc">- Dp rendah mulai dari 20 Jutaan</h3>
                    <h3 className="desc">- Angsuran mulai 2 Jutaan</h3>
                    <h3 className="desc">- Tenor sampai 8 Tahun</h3>
                    <h3 className="desc">- Trade in all merk dengan harga terbaik</h3>
                    <h3 className="desc">- Paket service 4 tahun / 50 Rb Km</h3>
                    <h3 className="desc">- Diskon puluhan juta dijamin maksimal</h3>
                </h3>
                <h1 style={{color: 'var(--black)', fontSize: "1.6rem"}}>Bonus langsung</h1>
                <h3 style={{fontWeight: 'bold', margin: '15px 10px', lineHeight: '32px'}}>
                    <h3 className="desc">✔ Karpet beludru</h3>
                    <h3 className="desc">✔ Dompet STNK</h3>
                    <h3 className="desc">✔ Kotak obat</h3>
                    <h3 className="desc">✔ Segitiga pengaman</h3>
                    <h3 className="desc">✔ Kaca film garansi 5th</h3>
                    <h3 className="desc">✔ Tatakan plat nomor</h3>
                    <h3 className="desc">✔ Dongkrak + Tool kit</h3>
                    <h3 className="desc">✔ Payung golf</h3>
                    <h3 className="desc">✔ Free jasa service selama 4th / 50rb Km</h3>
                    <h3 className="desc">✔ Free layanan bantuan darurat 3th</h3>
                    <h3 className="desc">✔ Free cuci mobil saat service</h3>
                    <h3 className="desc">✔ Free exclusive member service 3th</h3>
                    <h3 className="desc">✔ pengurusan STNK cepat</h3>
                    <h3 className="desc">✔ APAR * Alat Pemadam Api Ringan</h3>
                </h3>
            </div>
        </div>
        <div className="container">
            <h1 className="title" style={{marginLeft: '5px'}}>Honda Teknologi</h1>
            <div className="box" onClick={() => swalert('/ehev.mp4', "e:HEV", descehev)}>
                <div className="box-img-container">
                    <LazyLoadImage alt="honda e:hev" className="box-img" src="https://asset.honda-indonesia.com/2023/10/19/ehev.svg" loading="lazy" effect="blur"/>
                </div>
            </div>
            <div className="box" onClick={() => swalert('/sensing.mp4', "SENSING", descsensing)}>
                <div className="box-img-container">
                    <LazyLoadImage alt="honda sensing" className="box-img" src="https://asset.honda-indonesia.com/2023/10/19/sensing.svg" loading="lazy" effect="blur"/>
                </div>
            </div>
            <div className="box" onClick={() => swalert('/connect.mp4', "CONNECT", descconnect)}>
                <div className="box-img-container">
                    <LazyLoadImage alt="honda connect" className="box-img" src="https://asset.honda-indonesia.com/2023/10/19/connect.svg" loading="lazy" effect="blur"/>
                </div>
            </div>
            <h1 className="title" style={{marginTop: '20px', marginLeft: '5px'}}>Our Service</h1>
            <div className="box" onClick={() => handleContent('.box-experience')}>
                <div className="box-img-container" style={{gap: '15px', flexDirection: 'row'}}>
                    <div className="fa-solid fa-phone fa-xl"></div>
                    <h3 className="title" style={{color: 'var(--black)'}}>Honda Experience</h3>
                </div>
                <div className="box-experience">
                    <p className="desc" style={{ marginTop: '10px', textAlign: 'center' }}>
                        Experience Honda merupakan program layanan bantuan darurat 24 Jam yang diberikan secara eksklusif kepada anda selama berkendara dengan Honda. 
                    </p>
                </div>
            </div>
            <div className="box" onClick={() => handleContent('.box-ecare')}>
                <div className="box-img-container" style={{gap: '15px', flexDirection: 'row'}}>
                    <div className="fa-solid fa-mobile-phone fa-xl"></div>
                    <h3 className="title" style={{color: 'var(--black)'}}>Honda E-Care</h3>
                </div>
                <div className="box-ecare">
                    <p className="desc" style={{ marginTop: '10px', textAlign: 'center' }}>
                        Honda e-Care” adalah Layanan aplikasi bagi konsumen mobil Honda di Indonesia yang tersedia pada sistem operasi berbasis Android dan IOS, termasuk juga pada web yang dibuat untuk memudahkan Anda dalam menunjang aktivitas penggunaan dan/atau perawatan kendaraan Honda di dealer-dealer resmi Kami.
                    </p>
                </div>
            </div>
            <div className="box" onClick={() => handleContent('.box-service')}>
                <div className="box-img-container" style={{gap: '15px', flexDirection: 'row'}}>
                    <div className="fa-solid fa-calendar-days fa-xl"></div>
                    <h3 className="title" style={{color: 'var(--black)'}}>Booking Service</h3>
                </div>
                <div className="box-service">
                    <p className="desc" style={{ marginTop: '10px', textAlign: 'center' }}>
                    layanan yang memberikan kemudahan customer mengatur waktu kedatangan servis ke bengkel resmi sehingga dapat mempersingkat waktu dari antrian panjang.
                    </p>
                </div>
            </div>
            <div className="box" onClick={() => handleContent('.box-warranty')}>
                <div className="box-img-container" style={{gap: '15px', flexDirection: 'row'}}>
                    <div className="fa-solid fa-award fa-xl"></div>
                    <h3 className="title" style={{color: 'var(--black)'}}>Honda Warranty</h3>
                </div>
                <div className="box-warranty">
                    <p className="desc" style={{ marginTop: '10px', textAlign: 'center' }}>
                    Merupakan garansi yang berlaku untuk perbaikan atas kerusakan atau cacat yang timbul selama jangka waktu tertentu atau jarak yang telah ditentukan, yaitu selama pemakaian 3 tahun atau jarak tempuh 100.000 kilometer (mana yang tercapai terlebih dahulu).
                    </p>
                </div>
            </div>
            <div className="box-profile">
                <h1 className="title" style={{fontSize: '1.8rem',marginTop: '20px'}}>Ramdani</h1>
                <h3 className="title" style={{fontSize: "1.1rem", color: '#aaa', textAlign: 'center', marginTop: '5px'}}>Sales Consultant - on Honda Sholeh Iskandar</h3>
                <h3 className="title" style={{fontSize: "1.2rem", textAlign: 'center', marginTop: '30px'}}>BOOKING NOW</h3>
                <p className="title" style={{fontSize: "1.2rem", textAlign: 'center', marginTop: '5px'}}>{`${'0895320141471 ( Dani )'}`}</p>
                <h1 className="title" style={{fontSize: "1.2rem", textAlign: 'center', marginTop: '70px'}}>Address</h1>
                <p className="title" style={{fontSize: "0.9rem", color: '#aaa', textAlign: 'center', marginTop: '5px'}}>Jl. Sholeh Iskandar No.27, RT/RW 001/008 Kota Bogor, Kecamatan Tanah Sareal, Kelurahan Kedung Badak, Jawa Barat 16164, Indonesia.</p>
                <p className="title" style={{fontSize: "0.8rem", color: '#aaa', textAlign: 'center', marginTop: '100px'}}>Copyright © 2024 Ramdani Honda Bogor</p>
            </div>
        </div>
        </>
    )
}

export default Bannerbox;
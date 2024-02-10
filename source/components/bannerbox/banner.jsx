const Banner = {
    Hrv : () => {
        return(
            <div className="banner-box" style={{backgroundColor: "var(--text)" }}>
                <img src="/hrv.png" className="banner-img"/>
                <div className="wrapper-text">
                    <div>Honda HR-V</div>
                    <div>Mulai dari Rp383.900.000</div>
                </div>
                <div className="button banner">cek promo</div>
            </div>
        )
    },

    Brv : () => {
        return(
        <div className="banner-box" style={{background: "#aaa"}}>
            <img src="/brv.png" className="banner-img"/>
            <div className="wrapper-text">
                <div>Honda BR-V</div>
                <div>Mulai dari Rp292.900.000</div>
            </div>
            <div className="button banner">cek promo</div>
        </div>
        )
    },

    Wrv : () => {
        return(
        <div className="banner-box" style={{background: "var(--red)"}}>
            <img src="/wrv.png" className="banner-img"/>
            <div className="wrapper-text">
                <div>Honda WR-V</div>
                <div>Mulai dari Rp274.900.000</div>
            </div>
            <div className="button banner">cek promo</div>
        </div>
        )
    },

    Crv : () => {
        return(
        <div className="banner-box" style={{background: "var(--blue)"}}>
            <img src="/crv.png" className="banner-img"/>
            <div className="wrapper-text">
                <div>Honda CR-V</div>
                <div>Mulai dari Rp749.100.000</div>
            </div>
            <div className="button banner">cek promo</div>
        </div>
        )
    },

    Brio : () => {
        return(
        <div className="banner-box" style={{background: "#e9e991"}}>
            <img style={{translate: '10px 20px'}} src="/brio.png" className="banner-img"/>
            <div className="wrapper-text">
                <div>Honda Brio</div>
                <div>Mulai dari Rp167.900.000</div>
            </div>
            <div className="button banner">cek promo</div>
        </div>
        )
    },

    City : () => {
        return(
        <div className="banner-box" style={{background: "#D65359"}}>
            <img style={{translate: '30px 0', scale: '1.1'}} src="/city.png" className="banner-img"/>
            <div className="wrapper-text">
                <div>Honda City</div>
                <div>Mulai dari Rp352.500.000</div>
            </div>
            <div className="button banner">cek promo</div>
        </div>
        )
    },

    Civic : () => {
        return(
        <div className="banner-box" style={{background: "var(--white)"}}>
            <img style={{translate: '20px -20px'}} src="/civic.png" className="banner-img"/>
            <div className="wrapper-text">
                <div>Honda Civic</div>
                <div>Mulai dari Rp616.800.000</div>
            </div>
            <div className="button banner">cek promo</div>
        </div>
        )
    },

    Accord : () => {
        return(
        <div className="banner-box" style={{background: "#aaa"}}>
            <img style={{translate: '-10px -10px'}} src="/accord.png" className="banner-img"/>
            <div className="wrapper-text">
                <div>Honda Accord</div>
                <div>Mulai dari Rp959.900.000</div>
            </div>
            <div className="button banner">cek promo</div>
        </div>
        )
    },

}

export default Banner;
const Banner = {
    Hrv : () => {
        return(
            <div className="banner-box" style={{backgroundColor: "var(--text)" }}>
                <img src="/hrv.png" className="banner-img"/>
                <div className="wrapper-text">
                    <h3>Honda HR-V</h3>
                    <h3>Mulai dari Rp383.900.000</h3>
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
                <h3>Honda BR-V</h3>
                <h3>Mulai dari Rp292.900.000</h3>
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
                <h3>Honda WR-V</h3>
                <h3>Mulai dari Rp274.900.000</h3>
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
                <h3>Honda CR-V</h3>
                <h3>Mulai dari Rp749.100.000</h3>
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
                <h3>Honda Brio</h3>
                <h3>Mulai dari Rp167.900.000</h3>
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
                <h3>Honda City</h3>
                <h3>Mulai dari Rp352.500.000</h3>
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
                <h3>Honda Civic</h3>
                <h3>Mulai dari Rp616.800.000</h3>
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
                <h3>Honda Accord</h3>
                <h3>Mulai dari Rp959.900.000</h3>
            </div>
            <div className="button banner">cek promo</div>
        </div>
        )
    },

}

export default Banner;
import React from 'react'
import ReactDOM from 'react-dom/client'
import Routerpage from './router'

import "react-lazy-load-image-component/src/effects/blur.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "./global.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routerpage />
  </React.StrictMode>,
)

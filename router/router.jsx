import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../source/pages/homepage";

const Routerpage = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/sosmed" element={<Homepage/>}/>
        <Route path="/tentang" element={<Homepage/>}/>
      </Routes>
    </Router>
  )
}

export default Routerpage
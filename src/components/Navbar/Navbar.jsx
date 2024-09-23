import { motion } from 'framer-motion'
import './navbar.scss'
import Sidebar from '../Sidebar/Sidebar'
const Navbar = () => {
  return (
    <div className="navbar">
  <Sidebar/>
      <div className="wrapper">
      <span>
     <p>&lt; Abdul Kareem /&gt;</p>
        </span>
        <div className="social">
          <a href="https://www.linkedin.com/in/abdul-kareem-b128b51b3" target="_blank">
            <img src="/1.svg" alt="" />
          </a>
          <a href="https://github.com/Salmanabdul786"  target="_blank">
            <img src="/2.svg" alt="" />
          </a>
         
        </div>
      </div>
    </div>
  )
}

export default Navbar



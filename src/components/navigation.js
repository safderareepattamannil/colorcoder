import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="#">About</Link>
    <a href="https://github.com/safderareepattamannil" target="_blank" rel="noopener noreferrer">Github</a>
    <Link to="/reading">Currently Reading</Link>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)
import react, { Component } from 'react';
import { iconItems } from "./iconItems";
import { Navbar } from "react-bootstrap";


class navbar extends Component {
  state = {clicked: false }
  render() {
    return(
      <nav className="NavbarItems navbar-expand-sm bg-light">
        <div className="menu-icon" onClick={this.handleClick}></div>
        <ul>
          {MenuItems.map((item, index) =>{
            return(
              <li key={index} >
                 <a className={item.cName} href={item.url}>
                    {item.title}
                 </a>
              </li>
            )
          })}

        </ul>
      </nav>
    )
  }
}

export default Navbar

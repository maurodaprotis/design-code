import React from 'react'
import { Link } from 'gatsby'

import './Header.css';
import logo from '../images/logo-designcode.svg'

class Header extends React.Component {

  state = {
    hasScrolled: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({
        hasScrolled: true
      })
    } else {
      this.setState({
        hasScrolled: false
      })
    }
  }

  render() {
    const { hasScrolled } = this.state
    return (
      <div className={hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/">
            <img src={logo} alt="" width="30" />
          </Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy"><button>Buy</button></Link>
        </div>
      </div>
    )
  }
}

export default Header

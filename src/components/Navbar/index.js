// Write your code here
import './index.css'
import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const mode = isDarkTheme ? 'dark-mode' : 'light-mode'
          const logo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
          const link = isDarkTheme ? 'darkTheme' : 'lightTheme'
          const themeImg = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

          return (
            <div className={`nav-bg ${mode}`}>
              <img src={logo} alt="website logo" className="logo" />
              <ul className="link-container">
                <Link to="/">
                  <li className={link}>Home</li>
                </Link>
                <Link to="/about">
                  <li className={link}>About</li>
                </Link>
              </ul>
              <button type="button" onClick={toggleTheme}>
                <img src={themeImg} alt="theme" className="logo" />
              </button>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Navbar)

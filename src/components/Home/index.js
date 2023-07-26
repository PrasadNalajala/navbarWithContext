// Write your code here
import './index.css'

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeH1 = isDarkTheme ? 'home-h1-dark' : 'home-h1-light'
      const homeBg = isDarkTheme ? 'dark-bg' : 'light-bg'
      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      return (
        <div className="entire-bg">
          <Navbar />
          <div className={`home-bg ${homeBg}`}>
            <img src={homeImg} alt="home" className="homeImg" />
            <h1 className={homeH1}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home

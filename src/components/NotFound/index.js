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
        ? 'https://assets.ccbp.in/frontend/react-js/not-found-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/not-found-img.png'
      return (
        <div className="entire-bg">
          <Navbar />
          <div className={`home-bg ${homeBg}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="homeImg"
            />
            <h1 className={homeH1}>Lost Your Way?</h1>
            <p className={homeH1}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home

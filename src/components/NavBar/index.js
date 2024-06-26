// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="navbar-container">
      <div className="title-score-container">
        <div className="title-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
            alt="emoji logo"
            className="logo-image"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar

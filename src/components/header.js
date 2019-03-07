import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark" style={{
      background: `rebeccapurple`,
      position: `fixed`,
      width: `100%`,
      zIndex: 4,
    }}>
      <Link to="/" className="navbar-brand">ChenX</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"> </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">首页</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/page-2/">分支</Link>
          </li>
          <li className="nav-item">
            <Link className={["nav-link pull-right"]} to={"/"}>{siteTitle}</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

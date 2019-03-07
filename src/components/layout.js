import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./bootstrap.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={{
        background: `#f8f8f8`,
      }}>
        <Header siteTitle={data.site.siteMetadata.title}/>
        <div
          style={{
            margin: `0px auto`,
            maxWidth: 960,
            padding: `15px 1.0875rem 1.45rem`,
            paddingTop: 56,
            background: `#ffffff`,
            borderRadius: `4px`,
            border: `1px solid #d1d5da`,
            minHeight: `768px`,
          }}
        >
          <main>{children}</main>
        </div>
        <footer className={"text-center"} style={{
          padding: `15px 0px 15px 0px`,
          color: `#eee`,
        }}>
          Copyright © Forever Young
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"
import { Link } from "gatsby"
import { Button, Modal } from "react-bootstrap"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false
    }
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true })
  }

  render() {
    return (
      <Layout>
        <SEO title="首页" lang={"zh"} keywords={[`FocusFace`, `陈夕`, `永远年轻`]}/>
        <p>
          世界,你好
        </p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          {/*<Image />*/}
          <Button variant="primary" onClick={this.handleShow}>Primary</Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage

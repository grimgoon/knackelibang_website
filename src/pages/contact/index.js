import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {

  render() {
    return (
      <Layout>
          <div className="contact">
            <div>
                <p className="title">For general and press inquiries</p>
                <a className="email" href="mailto:contact@knackelibang.com">contact@knackelibang.com</a>
            </div>
            <div>
              <p className="title">For business related inquiries</p>
              <a className="email" href="mailto:business@knackelibang.com">business@knackelibang.com</a>
            </div>
          </div>
      </Layout>
    )
  }
}

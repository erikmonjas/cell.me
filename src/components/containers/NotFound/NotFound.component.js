import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../commons/Layout'

const NotFound = ({ className }) => {
  return (
    <Layout className={className}>
      <div className="wrapper">
        <p className="big-text">It seems the page you're looking for doesn't exist.</p>
        <Link className="go-back" to="/">Go back to home page</Link>
      </div>
    </Layout>
  )
}

export default NotFound

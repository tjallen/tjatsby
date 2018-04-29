import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { css } from 'emotion';

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Thom Allen, front-end developer"
      meta={[
        { name: 'description', content: 'Front-end developer, currently building React web apps at Zzish' },
        { name: 'keywords', content: 'thom allen, front-end, developer, london, front end, zzish, javascript, react, web apps' },
      ]}
    />
    <div
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

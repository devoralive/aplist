import React, { Fragment } from 'react'
import Json from './../json'

const Request = ({ method, path, headers, body }) => (
  <Fragment>
    <div>
      <span className="method">{ method }</span>
      <span className="path">{ path }</span>
    </div>
    <Json src={ headers }
          name="headers"
          collapsed="true" />
    <Json src={ body }
          name="body" />
  </Fragment>
)

export default Request
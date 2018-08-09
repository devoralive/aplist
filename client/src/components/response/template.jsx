import React, { Fragment } from 'react'
import Json from './../json'

const Response = ({ code, headers, body }) => (
  <Fragment>
    <div>
      <div className="code">{ code }</div>
    </div>
    <Json src={ headers }
          name="headers"
          collapsed="true" />
    <Json src={ body }
          name="body" />
  </Fragment>
)

export default Response
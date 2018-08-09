import React, { Fragment as _  } from 'react'
import Json from './../json'

const Response = ({ code, headers, body }) => (
  <_>
    <div>
      <div className="code">{ code }</div>
    </div>
    <Json src={ headers }
          name="headers"
          collapsed="true" />
    <Json src={ body }
          name="body" />
  </_>
)

export default Response
import React, { Fragment as _  } from 'react'
import Json from './../json'

const Response = ({ code, headers, jsonBody, rawBody }) => (
  <_>
    <div>
      <div className="code">{ code }</div>
    </div>
    <Json src={ headers }
          name="headers"
          collapsed="true" />
    { jsonBody && <Json src={ jsonBody } name="body" /> }
    { !jsonBody && <div>{ rawBody }</div> }
  </_>
)

export default Response
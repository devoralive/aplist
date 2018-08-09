import React from 'react'
import ReactJson from 'react-json-view'

const Request = ({ method, path, headers, body }) => (
  <div className="response">
    <div>
      <div className="method">{ method }</div>
      <div className="path">{ path }</div>
    </div>
    <ReactJson src={ headers }
                name="headers"
                iconStyle="square" 
                theme="paraiso" 
                indentWidth="2"
                displayDataTypes="false"
                displayObjectSize="false"
                collapsed="true" />
    <ReactJson src={ body }
                name="body"
                iconStyle="square" 
                theme="paraiso" 
                indentWidth="2" />
  </div>
)

export default Request
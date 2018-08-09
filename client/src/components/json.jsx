import React from 'react'
import ReactJson from 'react-json-view'

const Json = (props) => (
  <ReactJson iconStyle="square" 
             theme="bright:inverted" 
             indentWidth="2"
             displayDataTypes="false"
             displayObjectSize="false"
             { ...props } />
)

export default Json
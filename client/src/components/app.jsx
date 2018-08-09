import React, { Component } from 'react'
import './../style/App.css'
import Response from './response'
import Request from './request'

const endpoint = "http://localhost:8080"

const App = () => (
  <div className="App">
    <Request />
    <Response />
  </div>
)
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       method: 'GET',
//       path: '/',
//       headers: {},
//       body: {},
//       endpoint
//     };

//     this.socket = socketIOClient(endpoint);
//   }

//   render() {
//     // const socket = socketIOClient(this.state.endpoint);
//     this.socket.on('income_method', method => {
//       // $('#method').html(method);
//       this.setState({ method });
//       console.log(method);
//     });
//     this.socket.on('income_path', path => {
//       // $('#path').html(path);
//       this.setState({ path });
//       console.log(path);
//     });
//     this.socket.on('income_headers', headers => {
//       // $('#headers').html(headers);
//       this.setState({ headers });
//       console.log(headers);
//     });
//     this.socket.on('income_body', body => {
//       // $('#body').html(body);
//       console.log(body);
//       this.setState({ body });
//     });
//     return (
//         <div>
//           <div className="method">{this.state.method}</div>
//           <div className="path">{this.state.path}</div>
//         </div>
//         <ReactJson src={this.state.headers}
//                    name="headers"
//                    iconStyle="square" 
//                    theme="paraiso" 
//                    indentWidth="2"
//                    displayDataTypes="false"
//                    displayObjectSize="false"
//                    collapsed="true" />
//         <ReactJson src={this.state.body}
//                    name="body"
//                    iconStyle="square" 
//                    theme="paraiso" 
//                    indentWidth="2" />
//       </div>
//     );
//   }
// }

export default App;

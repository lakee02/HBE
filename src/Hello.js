// rfc
// import React from 'react'

// export default function Hello() {
//   return (
//     <div>Hello Component</div>
//   )
// }

//rafc
// import React from 'react'

// export const Hello = () => {
//   return (
//     <div>Hello</div>
//   )
// }

//rcc
// import React, { Component } from 'react'

// export default class Hello extends Component {
//   render() {
//     return (
//       <div>Hello</div>
//     )
//   }
// }

//rcep
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Hello extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string
  }

  render() {
    return (
      <div>
        
        <h1>Id:{this.props.id} Name:{this.props.name}</h1>
        
      </div>
    )
  }
}

export default Hello



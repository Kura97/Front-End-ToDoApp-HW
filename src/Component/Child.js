import React, { Component } from 'react'

export default class Child extends Component {
    componentWillUnmount(){
        console.log("component has been unmount")
    }

    componentDidMount() {
        console.log("component are mounting")

    }

    componentDidUpdate(){
        console.log("component updated !")
    }

  render() {
    return (
      <div>Abdulaziz</div>
    )
  }
}

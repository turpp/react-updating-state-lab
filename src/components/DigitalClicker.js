// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component{
    constructor(){
        super()
        this.state ={
            timesClicked: 0
        }
    }

    increase=()=>{
       this.setState(previousState => {
           return {timesClicked: previousState.timesClicked + 1}
       })
    }

    render(){
        return <button onClick={this.increase} type = 'button' >{`${this.state.timesClicked}`}</button>
    }




}
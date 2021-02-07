// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    changeBit = () => {
        this.setState({
            settings:{
            ...this.state.settings,
            bitrate: 12
            }
        })
    }

    changeRes = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                video: {resolution: '720p'}
            }
        })
    }

    render(){
       return <div>
           <button onClick={this.changeBit} className='bitrate' type='button'>Change Bitrate</button>
           <button onClick={this.changeRes} className='resolution' type='button'>Change resolution</button>
        </div>
    }


}
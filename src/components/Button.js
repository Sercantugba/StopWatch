import React, { Component } from 'react'

 class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
          paused: true
        }
      }
      startCount = () => {
            this.countInterval = setInterval(() => {
                this.setState({
                counter: this.state.counter + 1,
                paused: false,
            })
        }, 1000)
        
      }
      pauseCount = () => {
        if (this.state.paused === false) {
            this.setState({
                paused: true
            })
            clearInterval(this.countInterval)
    }   else {
        this.countInterval = setInterval(() => {
            this.setState({
            counter: this.state.counter + 1,
            paused: false,
        })
    }, 1000)
    }
}
      
      restartCount = () => {
          this.setState({
              counter: 0,
              paused: true
          })
       clearTimeout(this.countInterval)
      }
    render() {
        return (
            <div>
                <h1>Count: {this.state.counter}</h1>
              <div className='btn-grid'>
                <button className='button' onClick= {this.startCount}>Start</button>
                <button className='button' onClick= {this.pauseCount}>Pause</button>
                <button className='button' onClick= {this.restartCount}>Restart</button>
              </div>
            </div>
        )
    }
}
export default Button;
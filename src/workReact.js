import React, { Component } from 'react';

class App extends Component {
  state = {
    count : 0
}

increase = () => {
    this.setState({
        count : this.state.count + 1
    })
}

decrease = () => {
    this.setState({
        count : this.state.count - 1
    })
}

render () {
    return (
        <div className="App">
        <button onClick={this.increase}> + </button>
        <div> {this.state.count} </div>
        <button onClick={this.decrease}> - </button>
        </div>
    );
}
}

export default App;
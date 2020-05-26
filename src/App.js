import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from './actions/actions'

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
        <button onClick={this.props.increase}> + </button>
        <div> {this.props.count} </div>
        <button onClick={this.props.decrease}> - </button>
        </div>
    );
}
}

function mapStateToProps (state) {
    return {
        count : state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease())
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(App);

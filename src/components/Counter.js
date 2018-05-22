import React from 'react'
import { connect } from 'react-redux'

const Counter = (props) => {
  return (
    <div>
        <h1>Counter</h1>
        <p>Count: {props.count}</p>
      <button onClick={props.onIncrementClick}>Increment</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementClick: () => {
      console.log('clocking')
      const action = {
        type: 'INCREMENT'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

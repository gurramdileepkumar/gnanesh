import React from 'react'
import { connect } from 'react-redux'

class Redux2 extends React.Component {
    render() {
  return (
    <div>
        <h1>{this.props.count}</h1>
      
    </div>
  )
}
}

const mapStateToProps = (state)=>({
    count: state.count
})

export default connect(mapStateToProps)(Redux2);

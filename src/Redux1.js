import React from 'react'
import { connect } from 'react-redux';



class Redux1 extends React.Component {

    increment=()=>{
        this.props.dispatch({type:'ADD'})
    }
    decrement=()=>{
        this.props.dispatch({type:'REMOVE'})
    }

    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={this.increment}>add</button>
                <button onClick={this.decrement}>remove</button>
            </div>
        )
    }
}

const mapStateToProps = state=>({
    count:state.count
})

export default connect(mapStateToProps)(Redux1);

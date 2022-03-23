import React, { Component } from 'react';
import './Styles.css'
 
class Props1 extends Component {
    render() { 
        return (
            <div>
                {/* <span>Ui dvelopment</span>
                <h1>welcome {this.props.name}</h1> */}
                <div className="card">
                    <div className="card-img">
                        <img src={this.props.img} />
                    </div>
                    <div className="card-title">
                        <span>{this.props.mname}</span>
                    </div>
                </div>
            </div>
        );
    }
}

 
export default Props1;
import React, { Component } from 'react';
import './Styles.css';
import samad from './img/1.jpg';
 
class Style extends Component {
    render() { 
        const styles={
            color:"green",
            fontSize:"50px",
            textDecoration:"underline"
        }
        return (
            <div>
                <h1 
                style={{color:'red',fontSize:'50px',textDecoration:"underline"}}>
                    Bit Technologies
                </h1>
                <p>Welcome</p>
                <div className="xyz a" id="a">Hyderbad</div>
                <h2 style={styles}>samad</h2>
                <img src="./images/1.jpg"  alt="nature"/>
                <img src={samad}  alt="nature"/>

            </div>
        );
    }
}
 
export default Style;
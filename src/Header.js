import React, { Component } from 'react';
 
class Header extends Component {
    render() { 
        return (
            <div>
                <h1>Welcome</h1>
                <p>This is bit technologies....</p>
                <p>Full stack development institute.</p>
                <p>At Hyderabad.</p>
            </div>
        );
    }
}

class Header1 extends React.Component {
    render(){
        return (
            <div>Welcome to Header1 component.</div>
        )
    }
}
class Header2 extends React.Component {
    render(){
        return (
            <div>Welcome to Header2 component.</div>
        )
    }
}
export {Header1,Header2};
 
export default Header;
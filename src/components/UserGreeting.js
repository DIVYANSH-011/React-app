import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor (props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        if (this.state.isLoggedIn) {
            return <div> WELCOME DIVYANSH !!</div>
        } else {
            return <div> WELCOME GUEST !! </div>
        }
    }

        // return (
        //     <div>
        //         <div>WELCOME DIVYANSH  !!</div>
        //         <div>WELCOME GUEST !!</div>
        //     </div>
        // );
}


export default UserGreeting;
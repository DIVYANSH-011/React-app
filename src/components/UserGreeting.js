import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor (props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        return (
            this.state.isLoggedIn ? (
                <div>welocme Div</div>
            ) : (
                <div>welcome Gue</div>
            )
        )




        // let message 
        // if (this.state.isLoggedIn) {
        //     message =  <div>welcome D </div>
        // } else {
        //     message = <div>welcome G</div>
        // }
        // return <div>{message}</div>


    //     if (this.state.isLoggedIn) {
    //         return <div> WELCOME DIVYANSH !!</div>
    //     } else {
    //         return <div> WELCOME GUEST !! </div>
    //     }
    }

        // return (
        //     <div>
        //         <div>WELCOME DIVYANSH  !!</div>
        //         <div>WELCOME GUEST !!</div>
        //     </div>
        // );
}


export default UserGreeting;
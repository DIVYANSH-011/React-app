import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props)

        this.state={
            username : ""

        }
    }
    render() {
        return (
            <form>
                <label>Username</label>
                <input type = "text" />

            </form>
        );
    }
}

export default Form;
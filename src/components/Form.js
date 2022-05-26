import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props)

        this.state={
            username : "",
            comments : ""


        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = (event) => {
        this.setState({
            comments:event.target.value
        })
    }


    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input type = "text"  value={this.state.username}
                    onChange={this.handleUsernameChange}
                    />
                </div>

                <div>
                    <label>comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}>specify here</textarea>
                </div>
                

            </form>
        );
    }
}

export default Form;
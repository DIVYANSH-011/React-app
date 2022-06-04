import React, { Component } from 'react';
import RegComp from './RegComp';

class ParentComp extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            name: 'Divyansh'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Divyansh'
            })
        },2000)
    }
        
    render() {
        return (
            <div>
                ParentComp
                <RegComp name = {this.state.name} />
                <Purecomp name = {this.state.name} />

            </div>
        );
    }
}

export default ParentComp;
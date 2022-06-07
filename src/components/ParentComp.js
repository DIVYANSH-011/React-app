import React, { Component , PureComponent } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';

class ParentComp extends PureComponent {
    
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
        console.log('****************ParentComp render()****************')
        return (
            <div>
                ParentComp
                <RegComp name = {this.state.name} />
                <PureComp name = {this.state.name} />

            </div>
        );
    }
}

export default ParentComp;
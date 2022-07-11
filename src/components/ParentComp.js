import React, { Component, PureComponent } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

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
        }, 2000)
    }

    render() {
        console.log('****************ParentComp render()****************')
        return (
            <div>
                ParentComp
                <MemoComp name={this.state.name}  />
                {/* <RegComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}

            </div>
        );
    }
}

export default ParentComp;
import React, { Component } from 'react';
import Lifecycle from './Lifecycle';

class LifecycleA extends Component {
    constructor (props) {
        super(props)

        this.state = {
            name: 'divyansh'
        }
        console.log('LifecycleA constructor')
    }    

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) { 
        console.log('LifecycleA getSnapshotBeforeUpdate')
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'divyansh'
        })
    }



    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Chnage State</button>
                <Lifecycle />

            </div>
        );
    }
}

export default LifecycleA;
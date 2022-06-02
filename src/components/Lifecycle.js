import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor (props) {
        super(props)

        this.state = {
            name: 'divyansh'
        }
        console.log('Lifecycle constructor')
    }    

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('Lifecycle shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) { 
        console.log('Lifecycle getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('Lifecycle componentDidUpdate')
    }
    

    render() {
        console.log('Lifecycle render')
        return (
            <div>
                Lifecycle 
            </div>
        );
    }
}

export default Lifecycle;
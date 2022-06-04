import React, { Component } from 'react';

class ParentComp extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            name: 'Parent'
        }
    }
    render() {
        return (
            <div>
                ParentComp
            </div>
        );
    }
}

export default ParentComp;
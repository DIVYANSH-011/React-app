import React from 'react';
import './mystyles.css';

function StyleSheet(props) {
    let className = props.Primary ? 'Primary' : ''
    return (
        <div>
            <h1 className = {className}>the real style</h1>
        </div>
    );
}

export default StyleSheet;
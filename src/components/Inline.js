import React from 'react';

const heading = {
    fontsize:'72px',
    color:'blue'
}

function Inline(props) {
    return (
        <div>
            <h1 style = {heading}>inline</h1>
        </div>
    );
}

export default Inline;
import React from 'react';

function Button(props) {
    return (
        <div className="text-center my-5 p-1 text-white bg-button">
            <button type="submit">{props.value}</button>
        </div>
    );
}

export default Button;

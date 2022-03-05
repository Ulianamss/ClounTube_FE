import React from 'react';

const Button = (props) => {
    return (
            <div style={props.styles.button} >
                <image style={props.styles.image} source={props.path}/>
            </div>
    )
}
export default Button
import React from 'react';

const Features = (props) => {
    const { description, value } = props.productFeatures;
    return (
        <div>
            <li><strong>{description}</strong> : {value}</li>
        </div>
    );
};

export default Features;
import React from "react";


const Heading = (props) => {
    return (
        <div className="md:mt-5 md:px-16 md:mb-7">
            <h3 className="md:text-2xl">{props.text}</h3>
        </div>
    );
}

export default Heading;
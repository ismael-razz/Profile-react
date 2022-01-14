import React from "react";

function About(props){

    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default About;
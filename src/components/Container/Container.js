import React from "react";
//import "./Container.css";
import Logo from "../Logo";

const Container = props => (
    <div className={props.shake 
        ? "container d-flex flex-wrap justify-content-center shake"
        : "container d-flex flex-wrap justify-content-center"
    }
    >
        {props.logos.map((a, i)=> <Logo name={a} key={i} clickEvent={props.clickEvent}/>)}
    </div>
)

export default Container;
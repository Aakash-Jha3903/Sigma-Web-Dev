import React from 'react'

const Container = (props) => {
// const Container = ({ children }) => {
    return (
        <div className="container ">
            {/* This renders the child elements passed to Container */}
            {props.children}
            {/* {children} */}
        </div>
    );
};

export default Container

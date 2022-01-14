import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Links from "./Links";
import links from "./Links";


function App(){
    return (
        
    <Header />,
    // {links.map((linkItem) =>(
    //     <Links
    //     key = {linkItem.key}
    //     name = {linkItem.name}
    //     description = {linkItem.description}
    //     />
    //     )) }
    <Footer />
    
    );
}

export default App;
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {


    return (
    
        <div className="flex justify-center shadow-md sticky top-0 items-center space-x-16 content-center w-full bg-white h-16">
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/categorie'>Categorie</Link>
            </div>
            <div>
                <Link to='/movimenti'>Movimenti</Link>
            </div>
            <div>
                <b>New</b>
            </div>
        </div>
        
    )

};
export default Navbar;



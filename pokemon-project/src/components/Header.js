import React from "react";

const Header = () =>{
    return(
        <header>
            <h1>Pokemon Display</h1>

            <div className="adam-info">
            
            <h2>Author: Adam Hinton</h2>
            
            <a href='https://github.com/adamhinton/pokemon-project' target="_blank">Source</a>
            </div>

            {/* dropdown menu for display options */}
            <div className = 'dropdown'>

                <button className='dropbtn'>Display Options (check this out!</button>

                <div className='dropdown-content'>
                    <a href='#'>Tiny Pokemon</a>
                    <a href='#'>Big Pokemon</a>
                    <a href='#'>Sort by type</a>
                </div>
            </div>
        </header>
    )
}

export default Header
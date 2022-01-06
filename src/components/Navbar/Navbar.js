import React from 'react';
import CalculatorButton from './CalculatorButton';
import ThemeButton from './ThemeButton';

function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <CalculatorButton className="Buttons"/>
                    <ThemeButton className="Buttons"/>
                </div>
                
            </nav>
        </div>
    );
}

export default Navbar;
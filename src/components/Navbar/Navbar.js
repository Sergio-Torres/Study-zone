import React, {useState} from 'react';
import ThemeButton from './ThemeButton';
import CalculatorModal from './CalculatorModal';

function Navbar(){
   
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <ThemeButton className="Buttons"/>
                    <CalculatorModal/>
                </div>
                
            </nav>
        </div>
    );
}

export default Navbar;
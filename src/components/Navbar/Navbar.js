import React, {useState} from 'react';
import ThemeButton from './ThemeButton';
import CalculatorModal from './CalculatorModal';
import './navbar.css';

function Navbar(){
   
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              
                <div className="container-fluid">
                    <h1 className="title">Study zone</h1>
                    <ul>
                        <li>
                            <CalculatorModal/>
                        </li>
                        <li>
                            <ThemeButton className="Buttons"/> 
                        </li>
                    </ul>
                                       
                </div>
                
            </nav>
        </div>
    );
}

export default Navbar;
import React, {useState} from 'react';
import DarkThemeButton from './DarkThemeButton';
import LightThemeButton from './LightThemeButton';
import CalculatorModal from './CalculatorModal';
import './navbar.css';

function Navbar(props){

    const [valor, setValor] = useState(true);
    const [themeToggleButton, setThemeToggleButton] = useState(true);

   
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
                            {themeToggleButton
                                ?
                                <DarkThemeButton className="Buttons"
                                onClick={()=>{
                                    props.themeToggler(true)
                                    setThemeToggleButton(false)
                                }}
                                />:
                                <LightThemeButton className="Buttons"
                                
                                onClick={()=>{
                                    props.themeToggler(false)
                                    setThemeToggleButton(true)
                                }}
                                />
                            }
             
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
import React, {useState} from 'react';
import './App.css';

import styled,{ ThemeProvider } from 'styled-components';
import { createGlobalStyle } from "styled-components";
import {lightTheme, darkTheme} from './theme.js';


import Tasks from './components/Tasks/Tasks';
import Notes  from './components/Notes/Notes';
import PomodoroClock from './components/PomodoroClock/PomodoroClock';
import Navbar from './components/Navbar/Navbar';
import ContactMe from './components/ContactMe/ContactMe';

const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${props => props.theme.body}
    }
    .container{
        background-color: ${props => props.theme.container}
    }
    .container .tasks{
        background-color: ${props => props.theme.containerDivs}
    }
    .container .pomodoro-clock{
        background-color: ${props => props.theme.containerDivs}
    }
    //responsive
    @media screen and (max-width: 1000px){
        .container .tasks{
            grid-column: span 4;
            
        }
        .container .pomodoro-clock{
            grid-column: span 3;
        }
    }

    @media screen and (max-width: 800px){
        .container .tasks{
            grid-column: 1/-1;
            
        }
        .container .pomodoro-clock{
            grid-column: 1/-1;
        }
    }

`;
const StyledApp = styled.div`
    
    .container .pomodoro-clock button.Buttons{
        color: ${props => props.theme.fontColor}
    }
    .container .tasks td{
        color: ${props => props.theme.tableColor}
    }
    .container .tasks table{
        color: ${props => props.theme.tableColor}
    }
    .container .tasks label{
        color: ${props => props.theme.tableColor}
    }
    .container .tasks table button.Buttons{
        color: ${props => props.theme.fontColor}
    }

    .container button.with-text:hover{
        background-color: ${props => props.theme.buttonWithTextColor}

    } 
    
`;

function App() {
    const [theme, setTheme] = useState("light");

    const themeToggler = (props) =>{
        props === true ? setTheme('dark') : setTheme('light');
    }

    return (
        
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <StyledApp>
                <div>
                    <header>
                        <Navbar themeToggler={themeToggler}/>
                    </header>   
                    <div className='container'>
                        <div className="tasks">
                            <Tasks/>
                            <Notes className='notes'/>
                        </div>
                        
                        <div className='pomodoro-clock'>
                            <PomodoroClock/>
                        </div>
                     </div>
                     <footer>
                         <ContactMe/>
                     </footer>
                </div>
            </StyledApp>
        </ThemeProvider>
      
  );
}

export default App;

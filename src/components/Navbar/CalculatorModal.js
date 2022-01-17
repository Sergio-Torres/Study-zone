import React,{useState} from 'react';
import {Modal} from 'react-bootstrap';
import CalculatorButton from './CalculatorButton';
import CalculatorExitButton from './CalculatorExitButton';

import './calculator.css';

function CalculatorModal(){
    const[showModal, setShowModal] = useState(false);
    
    const handleModal = () => setShowModal(!showModal);

    const[calc, setCalc] = useState("");
    const[result, setResult] = useState();

    const operators = ['/', '*', '+', '-', '.'];

    const updateCalc = value =>{
        if(
           operators.includes(value) && calc ==='' || 
           operators.includes(value) && operators.includes(calc.slice(-1))
        ){
            return;
        }
        setCalc(calc + value);
        if(!operators.includes(value)){
            setResult(eval(calc + value).toString());
        }
    }

    const Digits = () =>{
        const digits = [];
        for(let i =1; i<10;i++){
            digits.push(
                <button 
                    onClick={()=>updateCalc(i.toString())} 
                    key={i}>{i}
                </button>
            );
        }
        return digits;
    }

    const calculate = () =>{
        setCalc(eval(calc).toString());
    }
    const deleteLast = () =>{
        if(calc ===''){
            return;
        }
        const value = calc.slice(0,-1);
        setCalc(value);
    }

    return (
        <div>
            <button className="Buttons" onClick={()=>{handleModal()}}>
                <CalculatorButton/>
            </button>
            <div className="modal">
            <Modal  show={showModal}>
                <div className='calculator'>
                    <Modal.Header>
                    <h2>Calculator</h2>
                    <button className="Buttons button-header" onClick={()=>{handleModal()}}>
                        <CalculatorExitButton/>
                     </button>
                    </Modal.Header>

                    <Modal.Body>
                        <div className='display'>
                            {result ? <span>({result})</span>: ''}&nbsp;
                            {calc || "0"}
                        </div>
                        <div className="buttons-body">
                            <div className="operators">
                                <button onClick={()=>updateCalc('/')}>/</button>
                                <button onClick={()=>updateCalc('*')}>*</button>
                                <button onClick={()=>updateCalc('+')}>+</button>                                
                                <button onClick={()=>updateCalc('-')}>-</button>

                                <button onClick={deleteLast}>DEL</button>
                            </div>

                            <div className="digits">
                                {Digits()}
                                <button onClick={()=>updateCalc('0')}>0</button>
                                <button onClick={()=>updateCalc('.')}>.</button>
                                <button onClick={calculate}>=</button>
                            </div>  
                        </div>
                                            
                    </Modal.Body>
                </div>
            </Modal> 
            </div>
            
        </div>
       
        
    );
    
}

export default CalculatorModal;
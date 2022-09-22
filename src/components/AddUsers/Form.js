import React, { useState } from "react";
import classes from'./Form.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorMadal from "../UI/ErrorModal";

const Form = (props) => {
    const [enterduserValue, setEnteredUserValue] = useState('');
    const [enterdAgeValue, setEnteredAgeValue] = useState('');
    const [error, setError] = useState();
    
    const formHandler = (event) => {
        event.preventDefault();
        if(enterduserValue.trim().length === 0 || enterdAgeValue.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Enter valid inputs'
            })
            return;
        }
        if(+enterdAgeValue < 1 ){
            setError({
                title: 'Invalid Age',
                message: 'Please enter valid age ( > 0 )'
            })
            return;
        }
        props.onAddUser(enterduserValue, enterdAgeValue);
        setEnteredUserValue('');
        setEnteredAgeValue('');
    };

    const userNameInputHandler = (event) => {
        setEnteredUserValue (event.target.value);
    };

    const userAgeInputHandler = (event) => {
        setEnteredAgeValue (event.target.value);
    };

    const errorHandler = () => {
        setError(null)
    };

    return (
        <div>
            {error && <ErrorMadal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={formHandler}>
                    <label htmlFor="username">User Name</label>
                    <input id='username' type='text'value={enterduserValue} onChange={userNameInputHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type='number' value={enterdAgeValue} onChange={userAgeInputHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default Form;
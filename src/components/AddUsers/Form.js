import React, { useState, useRef } from "react";
import classes from'./Form.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorMadal from "../UI/ErrorModal";
import Wrapper from "../helpers/Wrapper";

const Form = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef();

    const [error, setError] = useState();
    
    const formHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        const enteredCollege = collegeInputRef.current.value;

        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollege.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Enter valid inputs'
            })
            return;
        }
        if(+enteredAge < 1 ){
            setError({
                title: 'Invalid Age',
                message: 'Please enter valid age ( > 0 )'
            })
            return;
        }
        props.onAddUser(enteredName, enteredAge, enteredCollege);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collegeInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null)
    };

    return (
        <Wrapper>
            {error && (<ErrorMadal 
                title={error.title}
                message={error.message} 
                onConfirm={errorHandler}
            />)}
            <Card className={classes.input}>
                <form onSubmit={formHandler}>
                    <label htmlFor="username">User Name</label>
                    <input id='username' type='text'
                        ref={nameInputRef} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type='number'
                        ref={ageInputRef}/>
                    <label htmlFor="college">College Name</label>
                    <input id="college" type='text'
                        ref={collegeInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default Form;
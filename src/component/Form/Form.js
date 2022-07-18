import React,{useState} from "react";

const Form = (props)=>{
    const [newTitle, setNewTitle] = useState("")
    const [newAmount, setNewAmount] = useState("")
    const [NewDate, setNewDate] = useState("")

    const titleHandler = (event) => {
        
        setNewTitle(event.target.value)
    }
    const amountHandler = (event) => {
        
        setNewAmount(event.target.value)
    }
    const dateHandler = (event) => {
    
        setNewDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const newForm = {
            title: newTitle,
            amount : newAmount,
            date: new Date (NewDate)
        }

        props.onSaveData(newForm)

        setNewTitle("")
        setNewAmount("")
        setNewDate("")
        
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="form__controls">
                <div className="form__control">
                    <label>Title</label>
                    <input type ='text' 
                    value={newTitle} 
                    onChange={titleHandler}/>
                </div>
                <div className="form__control">
                    <label>Amount</label>
                    <input type= 'number'
                    value={newAmount} 
                    min= '0.01' 
                    step='0.01' 
                    onChange={amountHandler}/>
                </div>
                <div className="form__control">
                    <label>Date</label>
                    <input type='date'
                    value={NewDate} 
                    min='2020-01-01' 
                    max='2022-12-31' 
                    onChange={dateHandler}/>
                </div>
            </div>
            <div className="form__actions">
                <button type='submit'>Add product</button>
            </div>
        </form>
    );

}

export default Form;